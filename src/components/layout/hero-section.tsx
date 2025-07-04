"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Badge className="px-4 py-2 bg-blue-100 text-blue-800 border-blue-200 text-sm font-medium">
              🚀 New features available now
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Build Amazing
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              React Apps
            </span>
            <span className="block">Faster Than Ever</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The modern React framework with TypeScript, Next.js, Tailwind CSS, and Framer Motion. 
            Build beautiful, performant applications with best practices built-in.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Image/Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-xl shadow-2xl p-2 border border-gray-200">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <Image
                  src="https://placekitten.com/800/450"
                  alt="App Screenshot"
                  width={800}
                  height={450}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
            >
              🎉
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 