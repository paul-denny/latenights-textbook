import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import {CodeSnippets} from './_CodeSnippets'
import {CodeBlock} from "@site/src/components/CodeBlock";

export default function Home() {
    let [codeSnippet, updateCodeSnippet] = useState(CodeSnippets[Math.floor(Math.random() * CodeSnippets.length)])

    return (
        <Layout
            title={`Online Textbook`}
            description="The LateNights Online Textbook">
            <main>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '50px 15px',
                    flexDirection: 'column',
                }}>
                    <h1 style={{textAlign: 'center'}}>Welcome to the Online Textbook 🎉</h1>
                    <Link
                        style={{marginBottom: '20px'}}
                        className="button button--primary button--lg"
                        to="/docs/welcome">
                        Get Started
                    </Link>
                    <h2>Or, try out a random code snippet below:</h2>
                    <div style={{width: '73ch', maxWidth: '100%'}}>
                        <CodeBlock title={codeSnippet.title} code={codeSnippet.code}/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

