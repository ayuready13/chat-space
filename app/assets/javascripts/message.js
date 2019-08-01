$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="rightbox--center__message" data-id="${message.id}">
                  <div class="rightbox--center__message__info">
                    <p class="rightbox--center__message__info__name">
                      ${message.user_name}
                    </p>
                    <p class="rightbox--center__message__info__date">
                      ${message.date}
                    </p>
                  </div>
                  <div class="rightbox--center__message__text">
                    <p class=rightbox--center__message__text__content">
                      ${message.content}
                    </p>
                  </div>
                  ${img}
                </div>`
  return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.rightbox--center').append(html);
      $('.rightbox--center').animate({scrollTop: $('.rightbox--center')[0].scrollHeight}, 'fast');
      $('#message_content').val('');
    })
    .fail(function(data){
      alert('メッセージを入力してください')
    })
  })
});
