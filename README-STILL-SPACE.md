# Still Space — Minimal Stable v10

Still Space là trải nghiệm lái xe thư giãn tối giản chạy trực tiếp trên trình duyệt.

## Thay đổi trong v10

- Đổi toàn bộ tiêu đề và metadata hiển thị sang **Still Space**.
- Xóa các nội dung mô tả liên quan đến hành trình hoặc địa danh cũ.
- Giữ giao diện tối giản của v9, không thêm widget mới.
- Nút Donate/Ko-fi trong giao diện được chuyển đến:
  `https://mxhvn.github.io/vn/donations.html`
- Giữ nguyên Bike native, autodrive và cấu hình ổn định.

## Chạy trên Windows

Chạy `RUN_LOCAL_WINDOWS.bat`, sau đó mở:

```text
http://localhost:8080/?reset=1&v=10
```

Nếu trình duyệt còn cache bản cũ, nhấn `Ctrl + Shift + R`.

## Triển khai Cloudflare Pages

Dự án là website tĩnh. Có thể upload toàn bộ nội dung thư mục này bằng Direct Upload, không cần build command.

## Lưu ý giấy phép

Đây là bản tùy biến từ build được cung cấp trong cuộc trò chuyện. Vui lòng đọc `PRIVATE-PREVIEW-NOTICE.md` và giữ nguyên thông tin giấy phép/ghi công của dự án nền.
