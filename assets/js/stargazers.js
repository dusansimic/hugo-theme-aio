function getStargazers(repo) {
	return fetch(new Request(`https://api.github.com/repos/${repo}`)).then(res => res.json()).then(obj => obj.stargazers_count)
}

for (const e of document.querySelectorAll('.project-box')) {
	const link = e.querySelector('.link');
	const url = link.getAttribute('href')
	const arr = /github\.com\/(.*\/.*)$/.exec(url)

	if (arr.length !== 2) {
		continue
	}

	getStargazers(arr[1]).then(count => {
		if (count >= 1000) {
			count = `${(count / 1000).toFixed(1)}k`
		}

		e.querySelector('.stargazers').innerHTML = `⭐ ${count != undefined ? count : 0}`
	}).catch(err => console.error(err))
}
