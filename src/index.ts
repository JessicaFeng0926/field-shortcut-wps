import { basekit, FieldType, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
import { countWordsLikeOffice } from './utils';


basekit.addField({

  // 定义捷径的入参
  formItems: [
    {
      key: 'words',
      label: "需要统计字数的字段",
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Text],
      },
      validator: {
        required: true,
      }
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Number,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (formItemParams: { words: any }, context) => {
    let wordsToCount = "";
    if (formItemParams && formItemParams.words) {
      for (const line of formItemParams.words) {
        wordsToCount += line["text"]
      }
    }

    return {
      code: FieldCode.Success,
      data: countWordsLikeOffice(wordsToCount)
    }

  },
});
export default basekit;