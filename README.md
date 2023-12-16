# 🐛 Critical Bug Demo [Next.js Internationalization](https://github.com/vercel/next.js/issues/54765)

## Overview
This project is a demonstration of the bug reported [here](https://github.com/vercel/next.js/issues/54765). It's based on the official Next.js [app-dir-i18n-routing example](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing) and showcases the problem with loading public assets when internationalization is set up as per the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/internationalization).

## Online Demo
You can view a deployed version of this bug demonstration at https://next-14-issue-54765.vercel.app/en.

## Try yourself
To observe the bug locally:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
4. Notice the issues with public asset loading.