# 🎮 Flappy Bird - Game Cocos Creator

Chào mừng bạn đến với dự án game **Flappy Bird**! Đây là một phiên bản game được phát triển bằng **Cocos Creator 3D**. Người chơi sẽ điều khiển một con chim bay qua các chướng ngại vật mà không bị va chạm. Hãy cùng khám phá và cài đặt game này ngay trên máy tính của bạn!

---

## 🛠 Cài đặt và chạy dự án

### 1. **Clone Dự Án từ GitHub**

Đầu tiên, bạn cần clone dự án về máy tính của mình. Mở terminal và nhập lệnh sau:

```bash
git clone https://github.com/username/repository.git
```
### 2. Cài Đặt Node.js và npm

Dự án yêu cầu Node.js và npm. Bạn có thể tải và cài đặt Node.js từ nodejs.org. Sau khi cài đặt, kiểm tra phiên bản:

```bash
node -v
npm -v
```
### 3. Cài Đặt Các Phụ Thuộc

Di chuyển vào thư mục dự án và cài đặt các thư viện cần thiết bằng npm:

```bash
cd /path/to/your/project
npm install
```

### 4. Mở Dự Án trong Cocos Creator

Mở Cocos Creator (phiên bản tương thích với dự án của bạn).
* Chọn Open Project.
* Chọn thư mục dự án đã clone về và nhấn Open.
### 5. Chạy Game
Nhấn Play trong Cocos Creator để chạy game qua Browser.

### 6. Build Dự Án (Chạy trên Web)

#### Để build game cho nền tảng web, bạn có thể làm theo các bước sau:

* Chọn Project > Build trong Cocos Creator.
* Chọn nền tảng Web.
* Nhấn Build và đợi quá trình build hoàn tất.
* Sau khi build xong, mở thư mục build/ và tìm file index.html.

#### Chạy Game trên Web

Bạn có thể chạy game qua một server đơn giản:

* Dùng Python HTTP Server:

```bash
python -m http.server 8080
```
- Sau đó, mở trình duyệt và truy cập vào http://localhost:8080.

* Dùng Node.js với http-server:

- Cài đặt http-server:

```bash
npm install -g http-server
```
- Chạy server:

```bash
http-server ./build/web -p 8080
```
- Truy cập vào http://localhost:8080 để chơi game.

### 🎮 Cách Chơi
Điều khiển chim: Nhấn Space để cho chim bay lên.
Mục tiêu: Tránh các ống chướng ngại vật và bay càng lâu càng tốt để ghi điểm.
### 📂 Cấu Trúc Dự Án
Dưới đây là các thư mục và tệp quan trọng trong dự án:

* **assets/**: Chứa tài nguyên game (hình ảnh, âm thanh, v.v).
* **scripts/**: Chứa mã nguồn cho logic game (chim, ống, điểm số).
* **build/**: Các tệp đã build cho nền tảng Web, Android, iOS.
* **project/**: Cài đặt và cấu hình dự án Cocos Creator.
### 🚀 Các Tính Năng Chính
Điều khiển đơn giản: Chim bay lên khi nhấn phím Space.
Chướng ngại vật: Các ống sẽ xuất hiện và di chuyển qua màn hình.
Điểm số: Điểm số sẽ được tính khi chim vượt qua các ống mà không va chạm.
Âm thanh: Âm thanh sẽ được phát khi chim bay hoặc khi xảy ra va chạm.
### 📝 Lý Do .gitignore
Một số thư mục và tệp bị bỏ qua trong Git để giữ cho repository nhỏ gọn và dễ quản lý:

node_modules/: Các thư viện npm cần thiết, có thể cài lại bằng npm install.
build/: Các tệp đã build, có thể tái tạo khi cần thiết.
.vscode/, .idea/: Cấu hình của các IDE (Visual Studio Code, WebStorm), không cần thiết chia sẻ.
### 🎉 Chúc Bạn Chơi Game Vui Vẻ!
Cảm ơn bạn đã tham gia vào dự án Flappy Bird! Hãy thử sức và xem bạn có thể bay được bao xa! Nếu bạn có bất kỳ câu hỏi nào hoặc muốn đóng góp, đừng ngần ngại tạo issue hoặc pull request trên GitHub.

### ✨ Tác Giả
Tên tác giả: Đạt 09
Email: ...
Telegram: @duahettienday45 

### 📝 README.md Soạn thảo bởi
ChatGPT - Trợ lý AI của OpenAI