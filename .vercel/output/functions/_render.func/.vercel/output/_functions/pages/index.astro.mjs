import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as createAstro } from '../chunks/astro/server_NiejJJeM.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="de"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Berlin Events für Kinder</title><meta name="description" content="Ich bin Mark und zeige euch die besten Veranstaltungen für Kinder in Berlin: coole Feste, spannende Theater und kreative Workshops."><link rel="stylesheet" href="main.css">${renderHead()}</head> <body> <div class="hero-container"> <img class="hero1" src="hero.png"> <h1>Berlin Events für Kinder</h1> </div> <div style="margin-top: 50px">Herzlich willkommen auf meinem Kanal! 🎉 Ich bin Mark (12) und hier
			dreht sich alles um tolle Veranstaltungen für Kinder in Berlin! 🙌🏻
			Ob coole Feste, spannende Theaterstücke oder kreative Workshops – ich
			zeige euch, was mir am meisten Spaß macht und welche Events ihr auch
			auf keinen Fall verpassen solltet!
			
			Schaut regelmäßig vorbei, denn ich möchte oft neue Videos über
			kommende oder wiederkehrende Veranstaltungen posten! Abonniert meinen
			Kanal, damit ihr nichts verpasst und immer Tipps für die Freizeit
			habt. 🎬✨
<a href="https://www.youtube.com/@yt.bln030kids">Für Link zum Youtube Kanal, klicke hier!</a> </div> </body></html>`;
}, "/Users/mkwa/Documents/Webseiten/bln030kids/src/pages/index.astro", void 0);

const $$file = "/Users/mkwa/Documents/Webseiten/bln030kids/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
