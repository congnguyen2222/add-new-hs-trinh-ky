$(document).ready(function () {
  // Kích hoạt tooltip
  $('[data-toggle="tooltip"]').tooltip();
});

// Khởi tạo CKEditor trên textarea
CKEDITOR.replace("note", {
  height: 100, // Chiều cao editor
  toolbar: [
    ["Bold", "Italic", "Underline", "Strike", "-", "RemoveFormat"],
    ["NumberedList", "BulletedList", "-", "Outdent", "Indent"],
    ["Link", "Unlink"],
    ["Table", "HorizontalRule", "SpecialChar"],
    ["Maximize", "Source"],
  ],
});

ClassicEditor.create(document.querySelector("#editor"), {
  versionCheck: false,
});
