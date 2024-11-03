import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import {
  Brain,
  RefreshCw,
  Users,
  Code,
  ArrowRight
} from "lucide-react";
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon: Icon, title, description, comparison }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="h-full p-6 bg-gradient-to-br from-background via-primary/5 to-primary/10 border-primary/10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="text-sm text-muted-foreground/80 italic border-t border-primary/10 pt-4">
          {comparison}
        </div>
        <Button variant="ghost" className="w-full mt-4 gap-2 hover:bg-primary/5 justify-between">
          了解更多 <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  </motion.div>
);

export default function CoreFeatures() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">核心功能</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            像管理助理一样管理AI，让企业效率提升300%
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          icon={Brain}
          title="智能产品规划"
          description="就像有一位24小时在线的产品助理，自动收集分析市场动态，提供决策建议"
          comparison="传统：产品经理需要花大量时间收集市场数据、分析竞品、撰写规划"
        />
        <FeatureCard
          icon={RefreshCw}
          title="自动内容更新"
          description="相当于配备了一个不休息的内容助理，自动发现热点、生成文案、保持内容新鲜度"
          comparison="传统：运营人员需要每天盯着内容更新、人工编写文案"
        />
        <FeatureCard
          icon={Users}
          title="智能用户运营"
          description="犹如拥有一支随时待命的客服团队，智能回答问题、分析用户需求、主动发现问题"
          comparison="传统：客服需要人工回复用户问题、分析用户反馈"
        />
        <FeatureCard
          icon={Code}
          title="自动应用生成"
          description="如同配备了一个高效的技术助理，根据需求快速生成应用原型"
          comparison="传统：开发团队需要花费大量时间编码、测试、部署"
        />
      </div>
    </section>
  );
}