import React, { FormEvent, useState } from 'react';
import * as s from "./app.styles";
import {useGithubIssueComments} from "./api/github-events.api";
import ErrorDetails from "./components/error-details";

function App() {
    let userInput: any = null;
    let repoInput: any = null;
    const [user, setUser] = useState("microsoft");
    const [repo, setRepo] = useState("TypeScript");

    const { data, isLoading, isError, error } = useGithubIssueComments(user, repo)

    if(isLoading) {
        return (
            <div>Loading ...</div>
        )
    }

    if(isError) {
        return (
            <ErrorDetails error={error}/>
        )
    }

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser(userInput.value);
        setRepo(repoInput.value);
    };

    return (
        <s.container>
            <form onSubmit={onHandleSubmit}>
                <s.text_input ref={(input) => { userInput = input; }} placeholder={"user"} />
                <s.text_input ref={(input) => { repoInput = input; }} placeholder={"repo"} />
                <s.submit_input />
            </form>
            <s.header>Recent comments on TypeScript issues:</s.header>
            {data?.map((issue, index) => (
                <div key={index}>
                    <s.issuer_title>{issue.title}</s.issuer_title>
                    <pre>{issue.body}</pre>
                    {issue.comments.map(comment =>
                        <s.comment_body key={comment.id}>
                            <div>{comment.created_at} {comment.user.login}:</div>
                            <pre>{comment.body}</pre>
                        </s.comment_body>
                    )}
                </div>
            ))}
        </s.container>
    );
}

export default App;
