"use client";
import { useState } from "react";

const trends = [
  {
    id: 1,
    title: "自主智能体（Agentic AI）的全面崛起",
    description:
      "AI代理从简单的聊天机器人进化为可独立执行复杂任务的多智能体系统",
    impact: "企业流程自动化加速，人力资源转向战略决策，开发效率提升30%以上",
    tools: [
      {
        name: "微软Copilot Studio",
        description: "企业级AI助手，支持复杂任务自动化",
        url: "https://copilot.microsoft.com",
      },
      {
        name: "Google AI Agents",
        description: "多智能体协作系统，支持跨平台任务执行",
        url: "https://ai.google",
      },
      {
        name: "蚂蚁集团支小宝",
        description: "金融场景智能助手，提供个性化服务",
        url: "https://www.antgroup.com",
      },
    ],
    icon: "🤖",
  },
  {
    id: 2,
    title: "生成式AI工具的多模态化与专业化",
    description:
      "AI生成内容从文本、图像扩展至视频、3D模型、音乐等，且工具向垂直领域深化",
    impact: "代码生成工具增速达72%，AI生成代码占比预计2027年突破80%",
    tools: [
      {
        name: "Midjourney",
        description: "高质量AI图像生成工具",
        url: "https://www.midjourney.com",
      },
      {
        name: "Suno",
        description: "AI音乐创作平台",
        url: "https://www.suno.ai",
      },
      {
        name: "RunwayML",
        description: "AI视频编辑与生成工具",
        url: "https://runwayml.com",
      },
    ],
    icon: "🎨",
  },
  {
    id: 3,
    title: "原生多模态大模型的统一架构",
    description:
      "打破传统多模态拼接模式，原生统一视觉、语言、音频的端到端模型成为主流",
    impact: "提升跨模态推理能力，实现更自然的交互体验",
    tools: [
      {
        name: "智源Emu3",
        description: "视频-图像-文本统一模型",
        url: "https://www.baai.ac.cn",
      },
      {
        name: "GPT-5",
        description: "多模态版本，支持跨模态理解",
        url: "https://openai.com",
      },
    ],
    icon: "🧠",
  },
  {
    id: 4,
    title: "AI for Science（AI4S）驱动科研范式变革",
    description: "AI加速生物医学、材料科学等领域突破",
    impact:
      "AI在科研中的使用率2024年增长200%，预计2025年推动全球科研效率提升40%",
    tools: [
      {
        name: "微软AI2BMD",
        description: "生物分子动力学模拟平台",
        url: "https://www.microsoft.com",
      },
      {
        name: "Avenda Health",
        description: "AI驱动的癌症治疗平台",
        url: "https://avendahealth.com",
      },
    ],
    icon: "🔬",
  },
  {
    id: 5,
    title: "合成数据成为大模型迭代核心燃料",
    description:
      "AI生成的高质量合成数据被用于训练模型，缓解真实数据隐私与成本问题",
    impact: "合成数据使模型处理长文本能力提升50%，减少对标注数据的依赖",
    tools: [
      {
        name: "Synthetic Data Platform",
        description: "AI合成数据生成平台",
        url: "#",
      },
    ],
    icon: "📊",
  },
  {
    id: 6,
    title: "边缘计算与AI硬件的深度融合",
    description: "专用AI芯片推动本地化运算，降低能耗并提升实时性",
    impact: "边缘AI设备市场2025年规模预计达1200亿美元，年增长率35%",
    tools: [
      {
        name: "NVIDIA Jetson Thor",
        description: "高性能边缘AI计算平台",
        url: "https://www.nvidia.com",
      },
    ],
    icon: "💻",
  },
  {
    id: 7,
    title: "可解释AI（XAI）与伦理治理工具标准化",
    description:
      "企业部署AI时需透明化决策逻辑，XAI工具帮助检测偏见、确保合规性",
    impact: "全球超60%企业计划2025年前部署AI伦理审查系统",
    tools: [
      {
        name: "微软Responsible AI",
        description: "AI伦理与合规工具包",
        url: "https://www.microsoft.com",
      },
      {
        name: "Zest AI",
        description: "反偏见信贷模型",
        url: "https://www.zest.ai",
      },
    ],
    icon: "⚖️",
  },
  {
    id: 8,
    title: "超个性化（Hyper-Personalization）工具普及",
    description: "AI通过实时数据分析提供定制化体验",
    impact: "个性化推荐使电商转化率平均提升27%",
    tools: [
      {
        name: "Jasper",
        description: "品牌文案个性化生成",
        url: "https://www.jasper.ai",
      },
      {
        name: "豆包",
        description: "多语言交互助手",
        url: "https://www.doubao.com",
      },
    ],
    icon: "🎯",
  },
  {
    id: 9,
    title: "低代码/无代码AI平台加速技术民主化",
    description: "非技术人员可通过拖拽界面构建AI应用",
    impact: "中小企业AI采用率因低代码工具提升至58%",
    tools: [
      {
        name: "Coze",
        description: "字节跳动低代码AI平台",
        url: "https://www.coze.com",
      },
      {
        name: "PageOn.ai",
        description: "视觉脚本生成平台",
        url: "https://www.pageon.ai",
      },
    ],
    icon: "🛠️",
  },
  {
    id: 10,
    title: "AI工具与传统行业的深度博弈",
    description: "生成式AI冲击传统行业，推动创新与转型",
    impact: "教育科技访问量下降25%，设计平台增长21%，医疗AI诊断设备增长90%",
    tools: [
      {
        name: "Shopify AI",
        description: "AI商品推荐系统",
        url: "https://www.shopify.com",
      },
      {
        name: "Canva",
        description: "AI设计平台",
        url: "https://www.canva.com",
      },
    ],
    icon: "🔄",
  },
];

export default function TrendingPage() {
  const [selectedTrend, setSelectedTrend] = useState(trends[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AI发展趋势
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧趋势列表 */}
        <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
          {trends.map((trend) => (
            <button
              key={trend.id}
              onClick={() => setSelectedTrend(trend)}
              className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                selectedTrend?.id === trend.id
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl scale-[1.02]"
                  : "bg-white hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{trend.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{trend.title}</h2>
                  <p
                    className={`${
                      selectedTrend?.id === trend.id
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {trend.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 右侧详细信息 */}
        <div className="bg-white p-8 rounded-xl shadow-xl sticky top-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{selectedTrend.icon}</span>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {selectedTrend.title}
              </h2>
              <p className="text-gray-600 mt-2">{selectedTrend.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-2">行业影响</h3>
            <p className="text-gray-700">{selectedTrend.impact}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">相关工具</h3>
            <div className="space-y-4">
              {selectedTrend.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {tool.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
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
        </div>
      </div>
    </div>
  );
}
