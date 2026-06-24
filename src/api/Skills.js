import { fetchRepos } from "./githup_api";


export async function GetSkillsFromGithub() {

    const repos = await fetchRepos();
    const languageBytes = {};
    for (const repo  of repos){

        if (!repo.languages_url) continue;

        const res = await fetch(repo.languages_url, {

            headers:{
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },

        });
        const langs = await res.json();
        for (const lang in langs){
            languageBytes[lang] = (languageBytes[lang] || 0) + langs[lang];
        }
    }

    const total = Object.values(languageBytes).reduce(
        (a, b) => a + b, 0
    );
    
    return Object.entries(languageBytes).map(([name, bytes]) => ({
        name,
        level: Math.round((bytes / total) * 100),
    })).filter(skill => skill.level > 0).sort((a, b) => b.level - a.level);
}
