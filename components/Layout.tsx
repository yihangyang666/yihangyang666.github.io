import Head from 'next/head';
import { personalInfo } from '../data/profile';
import ResumeButton from './ResumeButton';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen relative selection:bg-primary selection:text-white pb-20">
            <Head>
                <title>{personalInfo.name} | 个人主页</title>
                <meta name="description" content={`${personalInfo.name}的个人简历和项目展示`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-gradient tracking-wider">{personalInfo.name}</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
            </main>

            <ResumeButton />

            {/* Footer */}
            <footer className="text-center py-8 mt-12 text-gray-600 text-sm glass-nav border-t border-white/5">
                <p>© {new Date().getFullYear()} {personalInfo.name}. Design with <span className="text-red-500">❤</span> using Next.js & Tailwind</p>
            </footer>
        </div>
    );
};

export default Layout;
