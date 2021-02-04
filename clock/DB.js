(function(window, $) {
var sheetID = "1ZPuM3HXNZegb0V1r_xdGSakG44hc5hGNeeXzpojoTHo", // 試算表代號
gid = "0", // 工作表代號
sql = "select%20C%20where%20A%20%3D%20'A2'", // SQL 語法
callback = "callback"; // 回呼函數名稱

$.getScript("https://spreadsheets.google.com/tq?tqx=responseHandler:" + callback + "&tq=" + sql + "&key=" + sheetID + "&gid=" + gid);

window[callback] = function(json) {
var rowArray = json.table.rows,
rowLength = rowArray.length,
html = "",
i, j, dataGroup, dataLength;
for (i = 0; i < rowLength; i++) {
dataGroup = rowArray[i].c;
dataLength = dataGroup.length;
for (j = 0; j < dataLength; j++) {
if (!dataGroup[j]) {
continue;
}
html += (dataGroup[j].f || dataGroup[j].v || "") + " ";
}
html += "<br/>";
}
$("#test").html(html);
};
})(window, jQuery);
