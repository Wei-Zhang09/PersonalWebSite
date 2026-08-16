export type Language = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface Capability {
  title: LocalizedText;
  description: LocalizedText;
}

export const profile = {
  name: 'Mr Z',
  email: '2767201026@qq.com',
  githubUrl: 'https://github.com/Wei-Zhang09',
  stack: ['C#', '.NET 9', 'WPF', 'MVVM', 'Dependency Injection', 'Windows Desktop'],
  hero: {
    kicker: { zh: '独立软件开发者 · Windows 工具', en: 'Independent maker · Windows utilities' },
    title: { zh: '让日常维护，', en: 'Make computer care' },
    emphasis: { zh: '不再难懂。', en: 'easy to understand.' },
    copy: {
      zh: '我为普通用户设计清晰、可控的 Windows 工具。从理解问题开始，再决定如何行动。',
      en: 'I design clear, controllable Windows tools for everyday users. Understand the problem first, then decide what to do.',
    },
  },
};

export const cleanMaster = {
  id: 'cleanmaster',
  name: 'CleanMaster',
  category: 'WINDOWS UTILITY',
  version: '2.3.0',
  platform: 'Windows Desktop',
  technology: 'WPF · .NET 9 · C#',
  sourceUrl: 'https://github.com/Wei-Zhang09/CleanMaster',
  downloadUrl: 'https://gitee.com/zhang_we/clean-master/releases/download/2.3.0/CleanMaster-Setup-v2.3.0.exe',
  screenshot: '/assets/cleanmaster/screenshots/52fd3fae-a51d-4366-a992-a8b94462df69.png',
  summary: {
    zh: '一款面向新手的 Windows 磁盘清理工具。它把杂乱的维护任务变成清晰的分类、可理解的结果与受控的操作，让释放空间不再是一场猜测。',
    en: 'A beginner-friendly Windows disk cleanup tool. It turns opaque maintenance into clear categories, understandable results, and controlled actions — no guesswork required.',
  },
  principle: { zh: '先理解，再操作', en: 'Understand before acting' },
  capabilities: [
    {
      title: { zh: '磁盘清理', en: 'Disk cleanup' },
      description: { zh: '扫描临时文件、系统缓存、回收站、浏览器缓存和开发工具缓存，并为谨慎项提供明确提示。', en: 'Scan temporary files, system caches, the recycle bin, browser caches, and developer-tool caches with clear warnings for caution items.' },
    },
    {
      title: { zh: '大文件与文件夹分析', en: 'Large file analysis' },
      description: { zh: '定位占用空间的大文件和大文件夹，帮助用户先找到问题，再决定如何处理。', en: 'Locate large files and folders so people can find the source of the problem before deciding what to do.' },
    },
    {
      title: { zh: '软件与启动项管理', en: 'Software & startup management' },
      description: { zh: '集中查看已安装软件和启动项，卸载软件后还可以检查相关残留。', en: 'Review installed software and startup items in one place, with leftover checks after uninstalling.' },
    },
    {
      title: { zh: '系统维护', en: 'System maintenance' },
      description: { zh: '提供 DISM、SFC、DNS 缓存和 Microsoft Store 缓存等系统维护操作。', en: 'Run focused maintenance actions for DISM, SFC, DNS cache, and Microsoft Store cache.' },
    },
  ] as Capability[],
  origin: {
    title: { zh: '很多人只是在 C 盘爆红之后，才第一次认真面对电脑空间问题。', en: 'Many people only confront disk-space problems after their C: drive turns red.' },
    copy: { zh: '但对不熟悉电脑的人来说，清理并不是简单地“删掉一些文件”。他们需要知道什么可以清理、为什么可以清理，以及每一次操作会带来什么影响。CleanMaster 就是从这个困扰开始的。', en: 'For people who are not comfortable with computers, cleanup is not simply “delete some files.” They need to know what is safe, why it is safe, and what each action changes. CleanMaster started from that frustration.' },
  },
};
