var playerData;

$(document).ready(function() {
    getData();
});


function getData() {
	$.getJSON("js/baseballYizhuWang", function(data){
    playerData = data;
    drawChart();

	});
}


function drawChart () {

     $(".player-name").html(playerData.name);                              /* loop */
    $.each(playerData.stats, function(i, item){
        var width = item.HR * 50;
             $(".chart").append(
                "<div class='col-md-12 bar-container'>"+
                "<div class='year'>"+item.year+"</div>"+
                "<div class='bar' style='width:"+width+"px'></div>"+
                "<div class='total'>"+item.HR+"</div>"+
                "</div>");
    });

}