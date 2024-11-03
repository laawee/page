import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Clock, Battery, Zap } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="p-6 h-full bg-gradient-to-br from-background to-primary/5 border-primary/10">
      <Icon className="w-10 h-10 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  </motion.div>
);

export default function ValueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">核心价值</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            像指导新员工一样指导AI，无需技术背景，随时调整工作方向
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={Clock}
            title="省心"
            description="把重复性工作交给AI助理团队，让您专注战略决策"
          />
          <ValueCard
            icon={Battery}
            title="省力"
            description="一个AI助理团队=多个职能岗位，大幅降低人力成本"
          />
          <ValueCard
            icon={Zap}
            title="省时"
            description="7*24小时自动运转，工作效率提升300%"
          />
        </div>
      </div>
    </section>
  );
}