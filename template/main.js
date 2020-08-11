<script type="Text/javascript">

function upload(event){
event.preventDefault();
var data = new Formdata($('form').get(id));

}
< div id = "main content">
  <input id = "searchInput" type= "text" placeholder ="search">
  <div class ="filterable" id="users-list-1">users-list-1</div>
  <div class ="filterable" id="users-list-2">users-list-2</div>
  <div class ="filterable" id="users-list-3">users-list-3</div>
  <div class ="filterable" id="users-list-4">users-list-4</div>
</div>
<script>
$(document).ready(function){
  $.ajax({
    type:'GET',
    url:'https://stgsales-starr.parentcircle.com/api/sample-test/check-email', //it got blocked in gmail coz of this link, so i have converted like this 
    datatype:"json",
  }).then(function(data){
    $('maincontent-id').append(data.id);
  });
});
