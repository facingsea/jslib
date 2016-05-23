/**
 * Created by wangzhf on 2016/5/23.
 */

function selectTheDom(dom){
    if (!!document.selection && !!document.selection.empty) {
        document.selection.empty();
    } else if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.removeAllRanges) {
            window.getSelection().removeAllRanges();
        }
    }
    var range =
        (!!document.body && !!document.body.createTextRange)
            ? document.body.createTextRange()
            : document.createRange();
    if (!!range.selectNode)
        range.selectNode(dom);
    else if (range.moveToElementText)
        range.moveToElementText(dom);
    if (!!range.select)
        range.select(dom);
    else
        window.getSelection().addRange(range);
}
