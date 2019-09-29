$(document).ready(function () {
    $('td').click(putPiece);
});

var lastMove;
var isWin = false;

function putPiece(event) {
    if (isWin) {
        return;
    }
    var tdVal = $(event.target).text();
    if (tdVal != '') {
        return;
    } else if (lastMove == 'x') {
        $(event.target).text('o');
        lastMove = 'o';
    } else {
        $(event.target).text('x');
        lastMove = 'x';
    }

    IsWin();

}

function IsWin() {
    var area = [];

    // organize 2D array
    $('tr').each(function (index, row) {
        var arr = [];
        $(row).find('td').each(function (index, cell) {
            arr.push($(cell).text());
        });
        area.push(arr);
    });

    // check each row
    for (var i = 0; i < 3; i++) {
        var v0 = area[i][0];
        var v1 = area[i][1];
        var v2 = area[i][2];
        if (v0 == v1 && v0 == v2 && v0.length > 0) {
            // to do ...
            WinnerFound(
                { x: i, y: 0 },
                { x: i, y: 1 },
                { x: i, y: 2 });
            return;
        }
    }

    // check each column
    for (var j = 0; j < 3; j++) {
        var v0 = area[0][j];
        var v1 = area[1][j];
        var v2 = area[2][j];
        if (v0 == v1 && v0 == v2 && v0.length > 0) {
            // to do ...
            WinnerFound(
                { x: 0, y: j },
                { x: 1, y: j },
                { x: 2, y: j });
            return;
        }
    }

    // check cross
    if (area[0][0] == area[1][1] && area[0][0] == area[2][2] && area[0][0].length > 0) {
        // to do ...
        WinnerFound(
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 });
        return;
    }

    if (area[0][2] == area[1][1] && area[0][2] == area[2][0] && area[0][2].length > 0) {
        // to do ...
        WinnerFound(
            { x: 0, y: 2 },
            { x: 1, y: 1 },
            { x: 2, y: 0 });
        return;

    }
}




function WinnerFound(obj1, obj2, obj3) {
    //var winner = $('tr:nth-child('+obj1.y+') td:nth-child('+obj1.x+')');
    var row1 = $('tr:nth-child(' + (obj1.x + 1) + ')');
    var cell1 = $(row1).find('td:nth-child(' + (obj1.y + 1) + ')');

    var row2 = $('tr:nth-child(' + (obj2.x + 1) + ')');
    var cell2 = $(row2).find('td:nth-child(' + (obj2.y + 1) + ')');

    var row3 = $('tr:nth-child(' + (obj3.x + 1) + ')');
    var cell3 = $(row3).find('td:nth-child(' + (obj3.y + 1) + ')');

    //$('#info').text('Winner is: '+cell.text());

    cell1.addClass("winner");

    cell2.addClass("winner");

    cell3.addClass("winner");

    $('#info').text('Winner is: ' + cell1.text());

    isWin = true;

}
