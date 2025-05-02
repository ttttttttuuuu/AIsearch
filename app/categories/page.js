"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
  {
    id: "text-generation",
    name: "文本生成",
    description: "AI文本创作和内容生成工具",
    tools: [
      {
        name: "豆包（字节跳动）",
        description:
          "支持多语言文案生成与翻译，集成于协作平台，适合团队快速生成营销文案、学术大纲等",
        url: "https://www.doubao.com",
        price: {
          free: "基础版免费",
          pro: "专业版 ¥99/月",
          enterprise: "企业版 联系销售",
        },
        features: ["多语言支持", "团队协作", "模板库"],
      },
      {
        name: "Notion AI",
        description:
          "结合知识管理功能，可生成结构化文档、会议纪要，并优化现有文本内容",
        url: "https://www.notion.so/product/ai",
        price: {
          free: "基础版免费",
          pro: "AI功能 $10/月",
        },
        features: ["知识管理", "文档生成", "内容优化"],
      },
      {
        name: "Jasper",
        description:
          "专注于品牌一致性文案生成，适用于广告创意、社交媒体内容及SEO优化",
        url: "https://www.jasper.ai",
        price: {
          starter: "入门版 $49/月",
          pro: "专业版 $99/月",
          business: "企业版 联系销售",
        },
        features: ["品牌一致性", "SEO优化", "团队协作"],
      },
      {
        name: "GPT-4（OpenAI）",
        description: "多场景文本生成，覆盖博客、代码、诗歌等，支持复杂逻辑推理",
        url: "https://openai.com/gpt-4",
        price: {
          free: "GPT-3.5免费",
          pro: "GPT-4 $20/月",
        },
        features: ["多场景支持", "复杂推理", "代码生成"],
      },
    ],
  },
  {
    id: "image-generation",
    name: "图像生成",
    description: "AI驱动的图像创建和编辑工具",
    tools: [
      {
        name: "Midjourney",
        description: "通过Discord指令生成高艺术性图像，适合概念设计与插画创作",
        url: "https://www.midjourney.com",
        price: {
          basic: "基础版 $10/月",
          pro: "专业版 $30/月",
          enterprise: "企业版 $600/年",
        },
        features: ["高艺术性", "Discord集成", "快速生成"],
      },
      {
        name: "DALL·E 3",
        description:
          "精准解析复杂文本提示，生成细节丰富的图像，适合广告与教育场景",
        url: "https://openai.com/dall-e-3",
        price: {
          free: "每月免费额度",
          pro: "按量计费",
        },
        features: ["精准提示", "细节丰富", "多场景适用"],
      },
      {
        name: "吐司TusiArt",
        description: "国内平台，集成多模型，支持社区分享与个性化训练",
        url: "https://tusiart.com",
        price: {
          free: "基础版免费",
          pro: "专业版 ¥99/月",
        },
        features: ["多模型支持", "社区分享", "个性化训练"],
      },
    ],
  },
  {
    id: "audio-processing",
    name: "音频处理",
    description: "AI音频生成和处理工具",
    tools: [
      {
        name: "Suno",
        description:
          "输入描述生成完整歌曲，支持多语言歌词，适合音乐人与内容创作者",
        url: "https://www.suno.ai",
        price: {
          free: "基础版免费",
          pro: "专业版 $10/月",
        },
        features: ["完整歌曲生成", "多语言支持", "歌词创作"],
      },
      {
        name: "MiniMax语音合成",
        description: "高拟真声音克隆与多语言TTS，适用于有声书与虚拟助手",
        url: "https://www.minimax.chat",
        price: {
          free: "试用版免费",
          pro: "按量计费",
        },
        features: ["声音克隆", "多语言TTS", "高拟真度"],
      },
      {
        name: "Adobe Podcast AI",
        description: "自动降噪、均衡音频，提升播客与录音质量",
        url: "https://podcast.adobe.com",
        price: {
          free: "基础版免费",
          pro: "Adobe Creative Cloud订阅",
        },
        features: ["自动降噪", "音频均衡", "播客优化"],
      },
    ],
  },
  {
    id: "video-editing",
    name: "视频编辑",
    description: "AI视频制作和编辑工具",
    tools: [
      {
        name: "Pika Labs",
        description: "文本/图像转视频，支持动态分镜与风格化渲染",
        url: "https://pika.art",
        price: {
          free: "等待名单",
          pro: "即将推出",
        },
        features: ["文本转视频", "动态分镜", "风格化渲染"],
      },
      {
        name: "剪映AI",
        description: "自动字幕生成、智能剪辑与特效添加，降低短视频创作门槛",
        url: "https://www.capcut.cn",
        price: {
          free: "基础版免费",
          pro: "会员 ¥30/月",
        },
        features: ["自动字幕", "智能剪辑", "特效库"],
      },
      {
        name: "RunwayML",
        description: "提供绿幕抠像、动态捕捉等高级功能，适合影视后期",
        url: "https://runwayml.com",
        price: {
          basic: "基础版 $15/月",
          pro: "专业版 $35/月",
          team: "团队版 $95/月",
        },
        features: ["绿幕抠像", "动态捕捉", "影视后期"],
      },
    ],
  },
  {
    id: "music-generation",
    name: "音乐生成",
    description: "AI音乐创作和制作工具",
    tools: [
      {
        name: "Soundraw",
        description: "按风格/情绪生成免版税音乐，适合视频背景音与广告配乐",
        url: "https://soundraw.io",
        price: {
          free: "试用版免费",
          pro: "个人版 $16.99/月",
          team: "团队版 $49.99/月",
        },
        features: ["免版税", "风格多样", "情绪匹配"],
      },
      {
        name: "Mubert",
        description: "根据用户偏好生成个性化音轨，适用于直播与沉浸式体验",
        url: "https://mubert.com",
        price: {
          free: "基础版免费",
          pro: "专业版 $14/月",
        },
        features: ["个性化生成", "直播集成", "沉浸式体验"],
      },
      {
        name: "AIVA",
        description: "AI音乐创作助手，生成原创音乐",
        url: "https://www.aiva.ai",
        price: {
          free: "基础版免费",
          pro: "专业版 €15/月",
          enterprise: "企业版 联系销售",
        },
        features: ["原创音乐", "多风格支持", "商业授权"],
      },
    ],
  },
  {
    id: "legal-research",
    name: "法律研究",
    description: "AI法律研究和分析工具",
    tools: [
      {
        name: "通义法睿",
        description: "合同审查、类案推荐与法律文书生成，覆盖民商行政领域",
        url: "https://legal.aliyun.com",
        price: {
          free: "试用版免费",
          pro: "专业版 ¥299/月",
          enterprise: "企业版 联系销售",
        },
        features: ["合同审查", "类案推荐", "文书生成"],
      },
      {
        name: "法智",
        description: "整合1.4亿案例数据库，提供实时法规检索与风险评估",
        url: "https://www.legalai.cn",
        price: {
          free: "基础版免费",
          pro: "专业版 ¥199/月",
        },
        features: ["案例数据库", "法规检索", "风险评估"],
      },
      {
        name: "ChatLaw",
        description: "开源大模型解析法律问题，支持多版本参数定制",
        url: "https://chatlaw.ai",
        price: {
          free: "开源免费",
          pro: "企业版 联系销售",
        },
        features: ["开源模型", "问题解析", "参数定制"],
      },
    ],
  },
  {
    id: "market-analysis",
    name: "市场分析",
    description: "AI市场研究和分析工具",
    tools: [
      {
        name: "Exploding Topics",
        description: "预测12-24个月内新兴趋势，覆盖科技、消费等领域",
        url: "https://explodingtopics.com",
        price: {
          free: "基础版免费",
          pro: "专业版 $49/月",
        },
        features: ["趋势预测", "多领域覆盖", "实时更新"],
      },
      {
        name: "Brandwatch",
        description: "分析1.4万亿条社媒数据，提供情绪分析与竞品洞察",
        url: "https://www.brandwatch.com",
        price: {
          enterprise: "企业版 联系销售",
        },
        features: ["社媒分析", "情绪分析", "竞品洞察"],
      },
      {
        name: "Microsoft Power BI",
        description: "整合多源数据，可视化展示市场动态与用户行为",
        url: "https://powerbi.microsoft.com",
        price: {
          free: "基础版免费",
          pro: "专业版 $9.99/月",
          premium: "高级版 $20/月",
        },
        features: ["数据整合", "可视化", "实时分析"],
      },
    ],
  },
  {
    id: "code-generation",
    name: "代码生成",
    description: "AI代码开发和辅助工具",
    tools: [
      {
        name: "GitHub Copilot",
        description: "自然语言转代码，支持30+编程语言，实时调试建议",
        url: "https://github.com/features/copilot",
        price: {
          free: "学生免费",
          pro: "个人版 $10/月",
          team: "团队版 $19/月",
        },
        features: ["多语言支持", "实时调试", "代码补全"],
      },
      {
        name: "Amazon CodeWhisperer",
        description: "基于数十亿代码库训练，优先安全合规性检测",
        url: "https://aws.amazon.com/codewhisperer",
        price: {
          free: "个人版免费",
          pro: "专业版 $19/月",
        },
        features: ["安全检测", "代码生成", "合规性检查"],
      },
      {
        name: "Cursor",
        description: "集成GPT-4与Claude，支持跨文件重构与终端命令生成",
        url: "https://cursor.sh",
        price: {
          free: "基础版免费",
          pro: "专业版 $20/月",
        },
        features: ["多模型集成", "文件重构", "命令生成"],
      },
    ],
  },
];

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const category = categories.find((cat) => cat.id === categoryParam);
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [searchParams]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AI工具分类
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={`p-6 rounded-xl text-left transition-all duration-300 ${
              selectedCategory?.id === category.id
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl scale-[1.02]"
                : "bg-white hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg hover:scale-[1.01]"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p
              className={`${
                selectedCategory?.id === category.id
                  ? "text-white/80"
                  : "text-gray-600"
              }`}
            >
              {category.description}
            </p>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {selectedCategory.name}类工具推荐
          </h2>
          <div className="space-y-6">
            {selectedCategory.tools.map((tool, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{tool.name}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-4">
                      {Object.entries(tool.price).map(([plan, price]) => (
                        <div key={plan} className="text-sm">
                          <span className="font-medium text-gray-700">
                            {plan}:{" "}
                          </span>
                          <span className="text-gray-600">{price}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <span className="flex items-center">
                        访问网站
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
