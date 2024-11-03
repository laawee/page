import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Rocket, Target, Sparkles, BarChart3, Zap, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useState } from 'react';

const FeatureCard = ({ title, description, items, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="relative h-full overflow-hidden border border-primary/10 bg-gradient-to-br from-background via-primary/5 to-primary/10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardHeader className="relative pb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative space-y-4">
          <ul className="space-y-3">
            {items.slice(0, isExpanded ? items.length : 3).map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="rounded-full bg-primary/10 p-1.5">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="space-y-3 pt-2">
            {items.length > 3 && (
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full justify-between hover:bg-primary/5"
              >
                {isExpanded ? '收起' : '查看更多功能'}
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            )}
            <Button className="w-full gap-2 bg-primary/10 hover:bg-primary/20">
              了解详情 <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function FeatureSection() {
  const frontendItems = [
    { text: "智能内容生成器：一键创建多平台爆款内容", icon: Sparkles },
    { text: "AI图文工作室：自动生成品牌视觉资产", icon: Target },
    { text: "智能投放优化：精准触达目标用户群体", icon: Rocket },
    { text: "数据驱动增长：实时优化获客策略", icon: TrendingUp },
    { text: "品牌声音定制：打造独特品牌调性", icon: Zap },
    { text: "多渠道协同：统一管理所有营销渠道", icon: BarChart3 },
  ];

  const backendItems = [
    { text: "智能产品工厂：快速将创意转化为产品", icon: Rocket },
    { text: "AI个性化推荐：提供精准用户匹配", icon: Target },
    { text: "智能活动引擎：自动化运营用户生命周期", icon: Sparkles },
    { text: "产品体验优化：持续提升用户满意度", icon: TrendingUp },
    { text: "智能决策系统：数据驱动产品迭代", icon: BarChart3 },
    { text: "全域数据分析：深度洞察用户行为", icon: Zap },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            全方位智能增长引擎
          </h2>
          <p className="text-xl text-muted-foreground">
            打造无需人工干预的全自动化增长系统
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="智能获客引擎"
            description="全自动化的多渠道获客系统，让获客更高效"
            items={frontendItems}
            icon={Users}
          />
          <FeatureCard
            title="智能转化引擎"
            description="数据驱动的用户增长系统，提升转化效率"
            items={backendItems}
            icon={Rocket}
          />
        </div>
      </div>
    </section>
  );
}