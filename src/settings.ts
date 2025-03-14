export const profile = {
	fullName: 'Jaehyuk Choi',
	title: '',
	institute: 'University of Edinburgh',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 's2070553@ed.ac.uk',
	linkedin: 'https://www.linkedin.com/in/choi-jaehyuk/',
	github: 'https://github.com/jaehyuk-choi',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://jaehyukchoi.netlify.app/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
