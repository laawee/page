import HeroSection from '@/components/HeroSection';
import ValueSection from '@/components/ValueSection';
import CoreFeatures from '@/components/CoreFeatures';
import FeatureSection from '@/components/FeatureSection';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CaseStudyMetric = ({ value, label, prefix = "" }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold text-primary mb-2">{prefix}{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const CaseStudy = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden max-w-4xl mx-auto"
  >
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="服装店铺"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold">某知名女装品牌</h3>
          <p className="text-muted-foreground">年营业额3000万 | 团队规模15人</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <CaseStudyMetric value="3倍" label="内容产出效率" />
        <CaseStudyMetric value="85%" label="客服响应提升" />
        <CaseStudyMetric value="50%" label="运营成本优化" />
        <CaseStudyMetric value="30%" label="月均营收增长" prefix="+" />
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">主要痛点</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 每日更新10+款商品，人工编写详情耗时</li>
            <li>• 旺季咨询量激增，2人客服团队应接不暇</li>
            <li>• 缺乏数据分析，选品定价依赖经验</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">解决方案</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• AI辅助生成商品详情，20分钟完成原1小时工作</li>
            <li>• 智能客服处理80%基础咨询，人工专注难点</li>
            <li>• 智能选品系统预测热销款，库存周转提升40%</li>
          </ul>
        </div>
      </div>

      <Button className="w-full mt-6 gap-2">
        查看完整案例 <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="custom-container">
        <HeroSection />
        <CoreFeatures />
        <ValueSection />
        <FeatureSection />

        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">客户案例</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              看看其他企业如何通过AI助理团队提升效率、降低成本
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8">
            <CaseStudy />
          </div>
        </section>

        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">开启智能化运营之旅</h2>
            <p className="text-xl text-muted-foreground mb-8">
              免费试用7天，体验AI助理团队为您带来的效率提升
            </p>
            <Button size="lg" className="gap-2">
              立即开始 <Sparkles className="w-4 h-4" />
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}