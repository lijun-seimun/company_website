# 视频说明 / Video notes

若首页视频显示黑屏，多半是 **编码格式** 问题：当前 MP4 可能为 HEVC (H.265)，部分浏览器无法解码。

**解决办法：** 将视频转为 **H.264 + AAC** 的 MP4（浏览器通用支持）。

## 使用 FFmpeg 转换（推荐）

安装 [FFmpeg](https://ffmpeg.org/) 后，在项目根目录执行：

```bash
# 备份原文件后，转成 H.264 并覆盖
ffmpeg -i public/videos/embryo-timelapse.mp4 -c:v libx264 -profile:v main -c:a aac -movflags +faststart public/videos/embryo-timelapse-h264.mp4
```

将生成的 `embryo-timelapse-h264.mp4` 重命名为 `embryo-timelapse.mp4` 并替换原文件即可。

---

If the hero video shows a black screen, the file may be **HEVC (H.265)**. Re-encode to **H.264 + AAC** for broad browser support:

```bash
ffmpeg -i public/videos/embryo-timelapse.mp4 -c:v libx264 -profile:v main -c:a aac -movflags +faststart public/videos/embryo-timelapse.mp4.new
```

Replace the original file with the `.new` output.
