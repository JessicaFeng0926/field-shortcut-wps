// 1个汉字算1
// 一个单词算1（数字、字母和英文标点符号都算单词里面的合法字符，遇到空格、汉字、中文标点符号或者达到了整个字符串的末尾了才算是结束了一个英文单词）
// 1个空格算0
// 1个换行符算0
// 1个中文标点符号算1
export const countWordsLikeOffice = (str: string) => {
    let count = 0;
    let foundEnglish = false;


    for (let i = 0; i < str.length; i++) {
        const chr = str[i];
        const isChineseChar = chr >= "\u4e00" && chr <= "\u9fff";
        const isEnglishChar = /^[a-zA-Z0-9]+$/.test(chr);
        const isEnglishPunctuation = /[.,;!?(){}[\]<>:"'`~\-+*/&^%$#@|\\]/.test(chr);


        if (isChineseChar) {
            count++;
            if (foundEnglish) {
                count++;
                foundEnglish = false;
            }
        } else if (isEnglishChar || isEnglishPunctuation) {
            if (!foundEnglish) {
                foundEnglish = true;
            }
        } else if (chr === ' ' || chr === '\n') {
            if (foundEnglish) {
                count++;
                foundEnglish = false;
            }
        } else {
            count++;
            if (foundEnglish) {
                count++;
                foundEnglish = false;
            }
        }
    }

    if (foundEnglish) {
        count++;
    }

    return count;
}