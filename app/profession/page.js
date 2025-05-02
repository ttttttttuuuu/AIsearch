"use client";
import { useState } from "react";
import Link from "next/link";

const professions = [
  {
    id: 1,
    name: "短视频创作者",
    description: "适合需要内容创作、视频剪辑和特效制作的创作者",
    workflow: [
      {
        step: 1,
        title: "内容创作",
        description: "使用AI生成视频脚本和文案",
        tools: [
          {
            name: "豆包（字节跳动）",
            description: "支持多语言文案生成与翻译，集成于协作平台",
            url: "https://www.doubao.com",
            category: "text-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥99/月",
            },
            features: ["多语言支持", "团队协作", "模板库"],
          },
          {
            name: "Notion AI",
            description: "结合知识管理功能，可生成结构化文档",
            url: "https://www.notion.so/product/ai",
            category: "text-generation",
            price: {
              free: "基础版免费",
              pro: "AI功能 $10/月",
            },
            features: ["知识管理", "文档生成", "内容优化"],
          },
        ],
      },
      {
        step: 2,
        title: "视觉素材生成",
        description: "使用AI生成视频所需的图像和素材",
        tools: [
          {
            name: "吐司TusiArt",
            description: "国内平台，集成多模型，支持社区分享",
            url: "https://tusiart.com",
            category: "image-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥99/月",
            },
            features: ["多模型支持", "社区分享", "个性化训练"],
          },
          {
            name: "DALL·E 3",
            description: "精准解析复杂文本提示，生成细节丰富的图像",
            url: "https://openai.com/dall-e-3",
            category: "image-generation",
            price: {
              free: "每月免费额度",
              pro: "按量计费",
            },
            features: ["精准提示", "细节丰富", "多场景适用"],
          },
        ],
      },
      {
        step: 3,
        title: "视频制作",
        description: "使用AI工具进行视频剪辑和特效制作",
        tools: [
          {
            name: "剪映AI",
            description: "自动字幕生成、智能剪辑与特效添加",
            url: "https://www.capcut.cn",
            category: "video-editing",
            price: {
              free: "基础版免费",
              pro: "会员 ¥30/月",
            },
            features: ["自动字幕", "智能剪辑", "特效库"],
          },
          {
            name: "RunwayML",
            description: "提供绿幕抠像、动态捕捉等高级功能",
            url: "https://runwayml.com",
            category: "video-editing",
            price: {
              basic: "基础版 $15/月",
              pro: "专业版 $35/月",
            },
            features: ["绿幕抠像", "动态捕捉", "影视后期"],
          },
        ],
      },
      {
        step: 4,
        title: "后期优化",
        description: "使用AI工具优化视频效果和音效",
        tools: [
          {
            name: "MiniMax语音合成",
            description: "高拟真声音克隆与多语言TTS",
            url: "https://www.minimax.chat",
            category: "audio-processing",
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
            category: "audio-processing",
            price: {
              free: "基础版免费",
              pro: "Adobe Creative Cloud订阅",
            },
            features: ["自动降噪", "音频均衡", "播客优化"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "设计师",
    description: "适合需要图像生成、设计辅助和创意灵感的专业人士",
    workflow: [
      {
        step: 1,
        title: "创意构思",
        description: "使用AI生成设计灵感和概念",
        tools: [
          {
            name: "豆包（字节跳动）",
            description: "支持多语言文案生成与翻译，集成于协作平台",
            url: "https://www.doubao.com",
            category: "text-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥99/月",
            },
            features: ["多语言支持", "团队协作", "模板库"],
          },
        ],
      },
      {
        step: 2,
        title: "图像生成",
        description: "使用AI生成设计素材和图像",
        tools: [
          {
            name: "吐司TusiArt",
            description: "国内平台，集成多模型，支持社区分享",
            url: "https://tusiart.com",
            category: "image-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥99/月",
            },
            features: ["多模型支持", "社区分享", "个性化训练"],
          },
          {
            name: "DALL·E 3",
            description: "精准解析复杂文本提示，生成细节丰富的图像",
            url: "https://openai.com/dall-e-3",
            category: "image-generation",
            price: {
              free: "每月免费额度",
              pro: "按量计费",
            },
            features: ["精准提示", "细节丰富", "多场景适用"],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "音乐创作者",
    description: "适合需要音乐创作、编曲和音频处理的音乐人",
    workflow: [
      {
        step: 1,
        title: "音乐创作",
        description: "使用AI生成音乐创意和旋律",
        tools: [
          {
            name: "Soundraw",
            description: "按风格/情绪生成免版税音乐，适合视频背景音与广告配乐",
            url: "https://soundraw.io",
            category: "music-generation",
            price: {
              free: "试用版免费",
              pro: "个人版 $16.99/月",
            },
            features: ["免版税", "风格多样", "情绪匹配"],
          },
          {
            name: "Mubert",
            description: "根据用户偏好生成个性化音轨",
            url: "https://mubert.com",
            category: "music-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 $14/月",
            },
            features: ["个性化生成", "直播集成", "沉浸式体验"],
          },
        ],
      },
      {
        step: 2,
        title: "音频处理",
        description: "使用AI工具优化音频效果",
        tools: [
          {
            name: "MiniMax语音合成",
            description: "高拟真声音克隆与多语言TTS",
            url: "https://www.minimax.chat",
            category: "audio-processing",
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
            category: "audio-processing",
            price: {
              free: "基础版免费",
              pro: "Adobe Creative Cloud订阅",
            },
            features: ["自动降噪", "音频均衡", "播客优化"],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "法律服务",
    description: "适合需要法律文件处理、案例分析和合同审查的法律专业人士",
    workflow: [
      {
        step: 1,
        title: "法律研究",
        description: "使用AI进行法律文献研究和案例分析",
        tools: [
          {
            name: "通义法睿",
            description: "合同审查、类案推荐与法律文书生成",
            url: "https://legal.aliyun.com",
            category: "legal-research",
            price: {
              free: "试用版免费",
              pro: "专业版 ¥299/月",
            },
            features: ["合同审查", "类案推荐", "文书生成"],
          },
          {
            name: "法智",
            description: "整合1.4亿案例数据库，提供实时法规检索",
            url: "https://www.legalai.cn",
            category: "legal-research",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥199/月",
            },
            features: ["案例数据库", "法规检索", "风险评估"],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "市场营销与广告",
    description: "适合需要市场分析、广告创意和内容营销的专业人士",
    workflow: [
      {
        step: 1,
        title: "市场分析",
        description: "使用AI进行市场研究和数据分析",
        tools: [
          {
            name: "Exploding Topics",
            description: "预测12-24个月内新兴趋势，覆盖科技、消费等领域",
            url: "https://explodingtopics.com",
            category: "market-analysis",
            price: {
              free: "基础版免费",
              pro: "专业版 $49/月",
            },
            features: ["趋势预测", "多领域覆盖", "实时更新"],
          },
          {
            name: "Microsoft Power BI",
            description: "整合多源数据，可视化展示市场动态与用户行为",
            url: "https://powerbi.microsoft.com",
            category: "market-analysis",
            price: {
              free: "基础版免费",
              pro: "专业版 $9.99/月",
            },
            features: ["数据整合", "可视化", "实时分析"],
          },
        ],
      },
      {
        step: 2,
        title: "内容创作",
        description: "使用AI生成营销内容和广告文案",
        tools: [
          {
            name: "豆包（字节跳动）",
            description: "支持多语言文案生成与翻译，集成于协作平台",
            url: "https://www.doubao.com",
            category: "text-generation",
            price: {
              free: "基础版免费",
              pro: "专业版 ¥99/月",
            },
            features: ["多语言支持", "团队协作", "模板库"],
          },
          {
            name: "Jasper",
            description: "专注于品牌一致性文案生成",
            url: "https://www.jasper.ai",
            category: "text-generation",
            price: {
              starter: "入门版 $49/月",
              pro: "专业版 $99/月",
            },
            features: ["品牌一致性", "SEO优化", "团队协作"],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "软件开发与IT服务",
    description: "适合需要代码开发、测试和系统维护的IT专业人士",
    workflow: [
      {
        step: 1,
        title: "代码开发",
        description: "使用AI辅助编程和代码生成",
        tools: [
          {
            name: "GitHub Copilot",
            description: "自然语言转代码，支持30+编程语言",
            url: "https://github.com/features/copilot",
            category: "code-generation",
            price: {
              free: "学生免费",
              pro: "个人版 $10/月",
            },
            features: ["多语言支持", "实时调试", "代码补全"],
          },
          {
            name: "Amazon CodeWhisperer",
            description: "基于数十亿代码库训练，优先安全合规性检测",
            url: "https://aws.amazon.com/codewhisperer",
            category: "code-generation",
            price: {
              free: "个人版免费",
              pro: "专业版 $19/月",
            },
            features: ["安全检测", "代码生成", "合规性检查"],
          },
        ],
      },
    ],
  },
];

export default function ProfessionPage() {
  const [selectedProfession, setSelectedProfession] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        选择您的职业
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {professions.map((profession) => (
          <button
            key={profession.id}
            onClick={() => setSelectedProfession(profession)}
            className={`p-6 rounded-xl text-left transition-all duration-300 ${
              selectedProfession?.id === profession.id
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl scale-[1.02]"
                : "bg-white hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg hover:scale-[1.01]"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{profession.name}</h2>
            <p
              className={`${
                selectedProfession?.id === profession.id
                  ? "text-white/80"
                  : "text-gray-600"
              }`}
            >
              {profession.description}
            </p>
          </button>
        ))}
      </div>

      {selectedProfession && (
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {selectedProfession.name}工作流程
          </h2>
          <div className="space-y-8">
            {selectedProfession.workflow.map((step) => (
              <div key={step.step} className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-semibold shadow-lg">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 ml-14">{step.description}</p>
                <div className="ml-14 space-y-4">
                  {step.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-semibold mb-3">
                            {tool.name}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {tool.description}
                          </p>
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
                          <div className="flex gap-4">
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
                            <Link
                              href={`/categories?category=${tool.category}`}
                              className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                            >
                              <span className="flex items-center">
                                查看同类工具
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
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
