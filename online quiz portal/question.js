let questions = [
  {
    numb: 1,
    question: "Câu 1: Cách khai báo biến nào sau đây là đúng trong JavaScript (ES6)?",
    answer: "D. Cả 3 cách trên đều đúng",
    options: [
      "A. var x = 10;",
      "B. let x = 10;",
      "C. const x = 10;",
      "D. Cả 3 cách trên đều đúng"
    ]
  },
  {
    numb: 2,
    question: "Câu 2: Hàm parseInt('10.5') sẽ trả về kết quả nào?",
    answer: "B. 10",
    options: [
      "A. 10.5",
      "B. 10",
      "C. 11",
      "D. NaN"
    ]
  },
  {
    numb: 3,
    question: "Câu 3: Đối tượng nào gọi hàm trong đoạn mã sau? (giả định là trong phạm vi global)",
    answer: "A. window (hoặc global trong Node.js)",
    options: [
      "A. window (hoặc global trong Node.js)",
      "B. undefined",
      "C. null",
      "D. document"
    ]
  },
  {
    numb: 4,
    question: "Câu 4: Giá trị nào được coi là 'falsy' trong JavaScript?",
    answer: "D. Cả 3 đáp án trên",
    options: [
      "A. 0",
      "B. '' (chuỗi rỗng)",
      "C. null",
      "D. Cả 3 đáp án trên"
    ]
  },
  {
    numb: 5,
    question: "Câu 5: Từ khóa typeof trong JavaScript được sử dụng để làm gì?",
    answer: "A. Kiểm tra kiểu dữ liệu của một giá trị",
    options: [
      "A. Kiểm tra kiểu dữ liệu của một giá trị",
      "B. Chuyển đổi kiểu dữ liệu",
      "C. Khai báo biến",
      "D. Gán giá trị cho biến"
    ]
  },
  {
    numb: 6,
    question: "Câu 6: Kết quả của biểu thức true + false là gì?",
    answer: "A. 1",
    options: [
      "A. 1",
      "B. 0",
      "C. true",
      "D. false"
    ]
  },
  {
    numb: 7,
    question: "Câu 7: Lệnh nào dưới đây dùng để tạo một đối tượng trong JavaScript?",
    answer: "C. Cả A và B đều đúng",
    options: [
      "A. let obj = {};",
      "B. let obj = new Object();",
      "C. Cả A và B đều đúng",
      "D. Không có cách nào đúng"
    ]
  },
  {
    numb: 8,
    question: "Câu 8: Kết quả của biểu thức '5' - 3 là gì?",
    answer: "A. 2",
    options: [
      "A. 2",
      "B. '53'",
      "C. NaN",
      "D. 5"
    ]
  },
  {
    numb: 9,
    question: "Câu 9: Thuộc tính nào giúp phần tử tự động điều chỉnh kích thước theo nội dung?",
    answer: "A. width: auto",
    options: [
      "A. width: auto",
      "B. flex-grow: 1",
      "C. min-content",
      "D. resize: auto"
    ]
  },
  {
    numb: 10,
    question: "Câu 10: Giá trị nào của position giúp một phần tử không bị ảnh hưởng khi cuộn trang?",
    answer: "D. fixed",
    options: [
      "A. relative",
      "B. absolute",
      "C. sticky",
      "D. fixed"
    ]
  },
  {
    numb: 11,
    question: "Câu 11: CSS nào giúp nội dung chỉ hiển thị một dòng và có dấu '...' nếu quá dài?",
    answer: "B. text-overflow: ellipsis",
    options: [
      "A. overflow: hidden",
      "B. text-overflow: ellipsis",
      "C. display: block",
      "D. clip-text: yes"
    ]
  },
  {
    numb: 12,
    question: "Câu 12: Thẻ nào trong HTML5 dùng để nhúng nội dung đa phương tiện mà không cần plugin?",
    answer: "B. video",
    options: [
      'A. embed',
      'B. video',
      'C. object',
      'D. audio'
    ]
  },
  {
    numb: 13,
    question: "Câu 13: Để đảm bảo một trang web hỗ trợ tốt cho SEO, thẻ nào là bắt buộc?",
    answer: 'B. meta name="description"',
    options: [
      'A. meta name="keywords"',
      'B. meta name="description"',
      'C. meta name="viewport"',
      'D. meta http-equiv="X-UA-Compatible"'
    ]
  },
  {
    numb: 14,
    question: "Câu 14: Trong HTML5, thuộc tính nào giúp xác định cách nhập dữ liệu cho input?",
    answer: 'C. type',
    options: [
      'A. placeholder',
      'B. pattern',
      'C. type',
      'D. autocomplete'
    ]
  },
  {
    numb: 15,
    question: "Câu 15: Cách nào giúp cải thiện hiệu suất tải trang khi sử dụng hình ảnh?",
    answer: 'A. Sử dụng thẻ picture',
    options: [
      'A. Sử dụng thẻ picture',
      'B. Luôn sử dụng ảnh có kích thước lớn',
      'C. Dùng ảnh .bmp',
      'D. Luôn tải trước tất cả ảnh trên trang'
    ]
  },
  {
    numb: 16,
    question: "Câu 16: Để tạo một nút bấm có thể gửi dữ liệu mà không làm tải lại trang, ta sử dụng?",
    answer: 'C. button type="button" onclick="submitForm()"',
    options: [
      'A. button type="submit"',
      'B. input type="button"',
      'C. button type="button" onclick="submitForm()"',
      'D. a href="#" onclick="submitForm()"'
    ]
  },
  {
    numb: 17,
    question: "Câu 17: Thẻ HTML nào KHÔNG còn được hỗ trợ trong HTML5?",
    answer: 'A. marquee',
    options: [
      'A. marquee',
      'B. abbr',
      'C. bdi',
      'D. wbr'
    ]
  },
  {
    numb: 18,
    question: "Câu 18: Thuộc tính nào giúp một liên kết mở trong tab mới?",
    answer: 'D. target="_blank"',
    options: [
      'A. target="_self"',
      'B. target="_parent"',
      'C. target="_top"',
      'D. target="_blank"'
    ]
  },
  {
    numb: 19,
    question: "Câu 19: Khi nào nên sử dụng section thay vì div?",
    answer: 'A. Khi muốn nhóm nội dung có cùng ý nghĩa',
    options: [
      'A. Khi muốn nhóm nội dung có cùng ý nghĩa',
      'B. Khi chỉ cần chia cột',
      'C. Khi không có tác dụng cụ thể',
      'D. Khi muốn áp dụng CSS dễ dàng hơn'
    ]
  },
  {
    numb: 20,
    question: "Câu 20: Thẻ figure được sử dụng để làm gì?",
    answer: 'B. Chứa hình ảnh hoặc biểu đồ có mô tả',
    options: [
      'A. Chứa nội dung chính của trang',
      'B. Chứa hình ảnh hoặc biểu đồ có mô tả',
      'C. Hiển thị văn bản quan trọng',
      'D. Định nghĩa một tiêu đề'
    ]
  },
];

