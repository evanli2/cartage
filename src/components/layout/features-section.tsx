"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  Layers,
  Sparkles,
  Rocket
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: "TypeScript First",
      description: "Built with TypeScript for better development experience and fewer runtime errors.",
      badge: "Developer Experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Beautiful UI Components",
      description: "Pre-built components with Shadcn UI and Tailwind CSS for stunning interfaces.",
      badge: "Design System",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with Next.js App Router and React Server Components.",
      badge: "Performance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Built-in security best practices and optimization for production deployment.",
      badge: "Security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices and screen sizes.",
      badge: "Responsive",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO optimization and meta tag management for better search rankings.",
      badge: "SEO",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="px-4 py-2 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern React Apps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit with the latest technologies and best practices 
            to help you build amazing applications faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative h-full bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-gray-400 transition-all duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full mb-8">
            <Layers className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Built with modern technologies</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-gray-300 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 