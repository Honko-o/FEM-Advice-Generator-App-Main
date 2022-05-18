$(function () {
   $("#advise__generator").on("click", function (event) {
       event.preventDefault();
       $.get("https://api.adviceslip.com/advice", function (data, status) {
           data = JSON.parse(data);
           const { slip } = data;
           const { id, advice } = slip;
           $(".advise__text").text(advice);
           $(".advise__id span").text(id);
       });
   }) 
});