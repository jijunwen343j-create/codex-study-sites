# German Vocab Site on Cloud Run

这个版本已经改成适合 Google Cloud Run 的部署方式：

- 服务启动入口由 `Procfile` 指定为 `python server.py`
- Python 版本固定为 `3.12`
- Google TTS 会优先使用 Google Application Default Credentials
- 德语 Google 发音已固定为最省钱的 `Standard` 音色
- 在 Cloud Run 上不需要再上传 service account JSON key

## 一次性准备

先启用这几个 API：

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  texttospeech.googleapis.com
```

## 直接部署

如果你是在 Cloud Shell 或本地已经拉下仓库：

```bash
cd codex-study-sites/german-vocab-site

gcloud run deploy german-vocab-site \
  --source . \
  --region europe-west3 \
  --allow-unauthenticated \
  --set-env-vars TTS_PROVIDER=google
```

## 说明

- `TTS_PROVIDER=google` 会强制语音走 Google TTS
- 如果不设置，代码会自动判断：有 Google 凭证就走 Google，没有就回退到 edge-tts
- 在 Cloud Run 上，Google 凭证来自服务自身的 service identity，不再依赖 JSON 密钥
- 如果后面想更稳，可以再单独给 Cloud Run 绑定一个专用 service account
