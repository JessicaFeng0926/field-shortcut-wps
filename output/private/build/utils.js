"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWordsLikeOffice = void 0;
// 1个汉字算1
// 一个单词算1（数字、字母和英文标点符号都算单词里面的合法字符，遇到空格、汉字、中文标点符号或者达到了整个字符串的末尾了才算是结束了一个英文单词）
// 1个空格算0
// 1个换行符算0
// 1个中文标点符号算1
const countWordsLikeOffice = (str) => {
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
        }
        else if (isEnglishChar || isEnglishPunctuation) {
            if (!foundEnglish) {
                foundEnglish = true;
            }
        }
        else if (chr === ' ' || chr === '\n') {
            if (foundEnglish) {
                count++;
                foundEnglish = false;
            }
        }
        else {
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
};
exports.countWordsLikeOffice = countWordsLikeOffice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUztBQUNULDJFQUEyRTtBQUMzRSxTQUFTO0FBQ1QsVUFBVTtBQUNWLGFBQWE7QUFDTixNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBR3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sYUFBYSxHQUFHLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUN6RCxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsTUFBTSxvQkFBb0IsR0FBRyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHN0UsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksWUFBWSxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQzthQUFNLElBQUksYUFBYSxJQUFJLG9CQUFvQixFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDO2FBQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUM7YUFBTSxDQUFDO1lBQ0osS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNmLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQTtBQXpDWSxRQUFBLG9CQUFvQix3QkF5Q2hDIn0=