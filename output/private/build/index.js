"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const utils_1 = require("./utils");
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的入参
    formItems: [
        {
            key: 'words',
            label: "需要统计字数的字段",
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Text],
            },
            validator: {
                required: true,
            }
        },
    ],
    // 定义捷径的返回结果类型
    resultType: {
        type: block_basekit_server_api_1.FieldType.Number,
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
    execute: async (formItemParams, context) => {
        let wordsToCount = "";
        if (formItemParams && formItemParams.words) {
            for (const line of formItemParams.words) {
                wordsToCount += line["text"];
            }
        }
        return {
            code: block_basekit_server_api_1.FieldCode.Success,
            data: (0, utils_1.countWordsLikeOffice)(wordsToCount)
        };
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBcUc7QUFDckcsbUNBQStDO0FBRy9DLGtDQUFPLENBQUMsUUFBUSxDQUFDO0lBRWYsVUFBVTtJQUNWLFNBQVMsRUFBRTtRQUNUO1lBQ0UsR0FBRyxFQUFFLE9BQU87WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixTQUFTLEVBQUUseUNBQWMsQ0FBQyxXQUFXO1lBQ3JDLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsQ0FBQyxvQ0FBUyxDQUFDLElBQUksQ0FBQzthQUM5QjtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7S0FDRjtJQUNELGNBQWM7SUFDZCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0lBQ0QsMkRBQTJEO0lBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBOEIsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNDLEtBQUssTUFBTSxJQUFJLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzlCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxvQ0FBUyxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFFLElBQUEsNEJBQW9CLEVBQUMsWUFBWSxDQUFDO1NBQ3pDLENBQUE7SUFFSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsa0JBQWUsa0NBQU8sQ0FBQyJ9