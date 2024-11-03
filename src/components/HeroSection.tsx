import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            您的24小时智能助理团队
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            像管理助理一样管理AI，让企业效率提升300%
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              免费试用7天 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              预约演示 <MessageSquare className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            已帮助1000+企业提升运营效率，平均节省60%人力成本
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}