import theme from '@nuxt/content-theme-docs';

export default theme({
	docs: {
		primaryColor: '#E24F55'
	},
	loading: { color: '#00CD81' },
	i18n: {
		locales: () => [{
			code: 'zh-TW',
			iso: 'zh-TW',
			file: 'zh-TW.js',
			name: '中文'
		}, {
			code: 'en',
			iso: 'en-US',
			file: 'en-US.js',
			name: 'English'
		}],
		defaultLocale: 'zh-TW',
		vueI18n: {
			fallbackLocale: 'zh-TW',
			silentTranslationWarn: true,
		}
	},
	buildModules: [
	]
})
