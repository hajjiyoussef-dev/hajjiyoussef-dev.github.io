
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
// const USERNAME = process.env.REACT_APP_GITHUB_USERNAME;


export async function fetchRepos() {

    console.log(process.env.REACT_APP_GITHUB_TOKEN);
    const res = await fetch(
        `https://api.github.com/user/repos?per_page=100&visibility=all`,
        {
            headers: {
                Authorization: `token ${TOKEN}`,
            },
        }
    );
    if (!res.ok)
        throw new Error("ERROR Github Fecth");
    return (res.json());
}

