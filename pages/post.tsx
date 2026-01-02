import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { parse } from 'marked';
import Layout from '../components/Layout';

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [issue, setIssue] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        setLoading(true);
        fetch(`https://api.github.com/repos/yihangyang666/yihangyang666.github.io/issues/${id}`)
            .then(res => res.json())
            .then(data => {
                setIssue(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch issue", err);
                setLoading(false);
            });
    }, [id]);

    return (
        <Layout>
            <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Home
                    </Link>
                </div>

                {loading ? (
                    <div className="glass-card p-12 rounded-3xl text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-gray-400">Loading Article...</p>
                    </div>
                ) : issue ? (
                    <article className="glass-card p-4 md:p-12 rounded-3xl overflow-hidden">
                        <header className="mb-10 border-b border-white/10 pb-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {issue.labels && issue.labels.map((label: any) => (
                                    <span key={label.id} className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary-light border border-primary/20">
                                        {label.name}
                                    </span>
                                ))}
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-gray-400">
                                    {new Date(issue.created_at).toLocaleDateString()}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                                {issue.title}
                            </h1>

                            <div className="flex items-center text-sm text-gray-400">
                                <img src={issue.user?.avatar_url} alt={issue.user?.login} className="w-10 h-10 rounded-full mr-3 border border-white/20" />
                                <span>by <span className="text-white font-medium">{issue.user?.login}</span></span>
                                <span className="mx-2">•</span>
                                <a href={issue.html_url} target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    View on GitHub
                                </a>
                            </div>
                        </header>

                        {/* Content Area */}
                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: parse(issue.body || '') as string }}
                        />
                    </article>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-500">Post not found</h2>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default PostPage;
