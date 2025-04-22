/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Link as Link, Slot as Slot, Button as Button, Text as Text, Body as Body, Paragraph as Paragraph, Heading as Heading, Image as Image, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { Collapsible as Collapsible, CollapsibleTrigger as CollapsibleTrigger, CollapsibleContent as CollapsibleContent, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "4ed395ea-421b-4d47-955a-c3760f78598f";

      export const lastPublished = "2025-04-22T15:15:57.339Z";

      export const siteName = "portfolio";

      export const breakpoints = [{"id":"jAWQK3_7D18H_5v0pK0z4"},{"id":"mONS0so-VrF1uS9rPlVcF","maxWidth":991},{"id":"zGIdqUzdPde7sHmF0aRQP","maxWidth":767},{"id":"wP-rcJFENR2yn86VzREAn","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "Favicon_-zaAiaX0AO3avMqzFpwQw.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["IBMPlexMono-Regular_XEb7jeg5C_8SVKdyQOvTE.ttf","InterVariable_qDqxtwB6S7W69tcm-FSxu.woff2","IBMPlexMono-Bold_UaOtoEYPT3lKzhZXJ2H2W.ttf","Raleway-VariableFont_wght_H9KxUdK8l4MoIpyd0hqUg.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["grass_shadergraph3_wWE6J51r1DEgRuPS33cP0.png","grass_shadergraph2_IIGyDD9d07jpdRN55iEkr.png","grass_shadergraph1_bc_3AG46ufIv6xHPYAuZ9.png","Shader3-1200w_feyZYhYvbbirdWiLqqj7T.gif","Shader1-1200w_WpBAxmyhKSaiNsoFaFTRz.gif","grass_shadergraph5_-XP3rxqpo6M68NxARAiXU.png","Particles_xoH2N8UhYKRMmOqECHj8u.gif","grass_shadergraph4_aMzb7hEeHchhmIebTsXyt.png","Screenshot_2025-04-18_151207_QpuMSHz1RNeBnryPFtKAD.png","Screenshot_2025-04-18_151127_zZaUaK-0ZtuwnY5r2Goo2.png","Screenshot_2025-04-18_151151_PqOZ5WSXCvE0Xg86Q6xqA.png","Shader2-1200w_gdyayvZ8kgh2dkdW-3H7X.gif","sparkles_UQ_FlcyiaNss_20VqKBe9.gif","Shader4-1200w_zcwKZguEumZr4x0xS1W9f.gif","smoke_UVZju7SYCZqypx_hxhCPB.gif","dome_jTJLeoz7FOS2c7VUZ_h6H.gif","scorchedGround_rUCpIO8mGyRf4BCfzSEY6.gif"]

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"blog_top"}
className={`w-body c1ns98mi`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  * {\n    /* Remove preset margins on everything so they can be applied where we want. */\n    margin: 0;\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  }\n</style>"}
className={`w-html-embed ck3af4j c19v6zpy`} />
<Box
tag={"nav"}
className={`w-box c1357293 c9jnjeu c1ngdwug c10yh23j cblpe2z c1xzl1u9 cry9bxc ca4qjwu c1cdc69r c13gq7xy c1lxiyww c1p9vydi c1kujfpy c1vfv5ml c1gut7ra cvyaqlm c5dy17i c1hsfuam ck3af4j c13cjyhn c150vpwe c22g687 co75lnx c1cqzw47 cu3aezk c1qyy4dh c18v2pa2 c1sz3la2 cu32ixa clyx4me cjkeggx clsdf7h c1tubug9 cc3dq2t`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c891fy0 c86t11j c6lwvnh c12f3mdq`}>
<Text
className={`w-text cnbspdo c1llqm3g c11dowh9`}>
{"Jan Teo"}
</Text>
<Text
className={`w-text c1kol985 c1llqm3g cn12ej2`}>
{"Tech Artist + Game Designer"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2 c10zkoym ct8c5y2 cgn90jy c2wmpdl c1cb3y4c c10x096o c1rstvfo c174sw29`}>
<Link
href={"/"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1llqm3g c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Home"}
</Link>
<Link
href={"/aboutme"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1wiaw3n c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"About Me"}
</Link>
<Link
href={"/project"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1llqm3g c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Projects"}
</Link>
<Link
href={"/devblog"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1wiaw3n c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Dev Blogs"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Collapsible
className={`w-collapsible cwvpjlf ck3af4j cx6c9kw c1mpedrw czqy8m4 c2k21j1 c10x096o c1fvno8n c18rgifh cscsz6x coh89bn`}>
<CollapsibleTrigger>
<Button
type={"button"}
aria-label={"Open mobile menu"}
className={`w-button c1b44psv cjtzmec c1b2tb9q c1xm4ef6 c1j33arz c1r2vfc1 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 caafw5v csru8nn c1md20bl c1e892th c16xs6ny ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm cuj80l1 ct8vr6u c1muyosp cvw3fbs cjhfojh c1cmxm2w c2c7i6t c1yyiwwo c1vy1xjw cl60rel c1ib9cr2 cb06ied c1wmohwt c1q2ekan cngthtj c1rstvfo cqj92n7 c1mpedrw c1hwnlfi chn6b52 c1onjpca c1oxjrsz csud216 c1xiy5b1 cq7d8me c18k2t67 chwk27y cxkh49z c1xbwnnp c1l26bnx c1k6tqmo crb6fy4 cu7vmrq ckqzz7r`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\"><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line></svg>"}
className={`w-html-embed c1wiaw3n`} />
</Button>
</CollapsibleTrigger>
<CollapsibleContent
data-ani={"expand"}
className={`w-collapsible-content c86t11j c6lwvnh`}>
<Box
tag={"nav"}
className={`w-box c1357293 c9jnjeu c1y6imu0 c3qzgd0 czr2pxy c1xzl1u9 cry9bxc ca4qjwu c1cdc69r c13gq7xy c1lfjoq7 c1mnel40 c1iylx1l c19z51lk cnntvf0 cm7fzb7 cxuma7n`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c891fy0 c86t11j c6lwvnh c12f3mdq`}>
<Text
className={`w-text cnbspdo c1llqm3g c11dowh9`}>
{"Jan Teo"}
</Text>
<Text
className={`w-text c1kol985 c1llqm3g cn12ej2`}>
{"Tech Artist + Game Designer"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2 c10zkoym ct8c5y2 cgn90jy c2wmpdl c1cb3y4c c10x096o c1rstvfo c174sw29`}>
<Link
href={"/"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1llqm3g c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Home"}
</Link>
<Link
href={"/aboutme"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1wiaw3n c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"About Me"}
</Link>
<Link
href={"/project"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1llqm3g c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Projects"}
</Link>
<Link
href={"/devblog"}
className={`w-link cl60rel c1ib9cr2 csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1wiaw3n c135vpv5 c1qyy4dh ct02u4h cb06ied c3npaz2`}>
{"Dev Blogs"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</CollapsibleContent>
</Collapsible>
</Fragment_1>
</Slot>
<Box
tag={"section"}
className={`w-box c1fo9lv5 c1mzb2kd cbb9sc4`}>
<Box
className={`w-box c1357293 c9jnjeu c1y6imu0 c3qzgd0 czr2pxy c1xzl1u9 cry9bxc c10zkoym ct8c5y2 c13gq7xy c1lfjoq7 c1qyy4dh ct02u4h`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c16xs6ny ct02u4h c1qom380 c1fhkm63 clv8gve c1mcu1jn c1r8bsqm c158qw7a c1di64f2 c1ru090q c1syziaj c19ffyra cz2aw51 cakjhhm cnqbj7z c1th2f9o`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c10mkqwx c16xs6ny ct02u4h c1mcu1jn cgn90jy chgdsgq`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 cvgv9nf c8ys3vy c74kosi c1x4yn0w c1dhz37v`}>
{"Visual Effects Exploration"}
</Heading>
<Paragraph
className={`w-paragraph c1nkzcyu c3fmn7t c12ho6o0 c1x4yn0w clllkwr c1dhz37v`}>
{"16 April 2025"}
</Paragraph>
<Paragraph
className={`w-paragraph c1nkzcyu c3fmn7t c12ho6o0 cauqto8 c1c2j90z ct02u4h c16dndnb cuj80l1 c1dhz37v`}>
{"A compilation of some experimental VFX exploration on Unity 5."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c18v2pa2 c1mcu1jn`}>
<Paragraph
className={`w-paragraph cx84glk c12ho6o0`}>
{"Effects here were done for a Generative Art class in university."}
</Paragraph>
</Box>
<Heading
className={`w-heading c1qyy4dh c1vlqdzi c1qom380 c1llqm3g cl7jefz c2wmpdl ckjkq46 ce1ytke c1uv6uxn cacfwr0 c14969jl c1por3pp c1er9g7j co9ka97 cj9wdjl c1tp72xw c1ddt9bk ch1n2fj`}>
{"Grass VFX"}
</Heading>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cori9ti c17xbrdu c1mcu1jn cx6c9kw c174sw29`}>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c1vlqdzi colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z\"/>\n        <path fill=\"currentColor\" d=\"M5 16c.748 0 1.463.226 2.014.64c.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86c-.55.414-1.266.64-2.014.64c-.748 0-1.463-.226-2.014-.64C2.434 19.948 2 19.3 2 18.5s.434-1.447.986-1.86C3.536 16.225 4.252 16 5 16Zm0 2c-.357 0-.641.11-.814.24c-.123.092-.165.17-.18.218L4 18.5l.007.042c.014.048.056.126.179.219c.173.13.457.239.814.239c.357 0 .641-.11.814-.24c.123-.092.165-.17.18-.218L6 18.5l-.007-.042c-.014-.048-.056-.126-.179-.219C5.641 18.11 5.357 18 5 18Zm7.923-15.115c1.487 0 2.803.727 3.613 1.844a4.462 4.462 0 0 1 4.309 7.344a4.462 4.462 0 0 1-6.296 3.956a4.462 4.462 0 0 1-6.87-1.707A4.462 4.462 0 0 1 8.725 5.83a4.462 4.462 0 0 1 4.197-2.945Zm0 2a2.462 2.462 0 0 0-2.427 2.05a1 1 0 0 1-.888.83l-.146.004a2.462 2.462 0 0 0-.716 4.818a1 1 0 0 1 .667.667a2.463 2.463 0 0 0 4.224.889a1 1 0 0 1 1.333-.166a2.462 2.462 0 0 0 3.867-2.225a1 1 0 0 1 .333-.832a2.462 2.462 0 0 0-2.665-4.078a1 1 0 0 1-1.333-.5a2.462 2.462 0 0 0-2.249-1.457Z\"/>\n    </g>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g cnbspdo cyqk3ni cl7jefz`}>
{"Thought process"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"At the Beginning"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I wanted to recreate the changing seasons and I thought of making a floor of fallen leaves that start out green then transition to orange/reds to brown and then covered in snow before it melts and the leaves are green again."}
</Paragraph>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Problems with That"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I underestimated the amount of work that it would take just to start out. First I couldn't really figure out how to make a proper leaf shape with the sharp tapering on the top and bottom as well as the details within the leaf. Then I had issues coming up with ways to simulate/create a pile of leaves nicely, I was struggling to layer them on top of each other."}
</Paragraph>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Cutting my Losses"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"After struggling for a few hours, I decided to cut my loses and just go for a simpler concept. Basically having blades of grass that grow up from the ground that turn from green to brown and 'wither away' at the end."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Shader Graph Walkthrough"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Grass blade shape"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I start off by creating the shape of the grass. I used the Twirl node to have the Rectangle shape warp a little to the side, creating a droopy blade of grass then adding them together to create 3 blades of droopy grass."}
</Paragraph>
</Box>
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp c30mcpp c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/grass_shadergraph1_bc_3AG46ufIv6xHPYAuZ9.png"}
optimize={false}
width={1227}
height={823}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp c1e36frz c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/grass_shadergraph2_IIGyDD9d07jpdRN55iEkr.png"}
optimize={false}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Shader Graph Walkthrough"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Grass blade shape"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I start off by creating the shape of the grass. I used the Twirl node to have the Rectangle shape warp a little to the side, creating a droopy blade of grass then adding them together to create 3 blades of droopy grass."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Shader Graph Walkthrough"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Grass Grow/ Wither Animation"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"The growing/wither animation I did was pretty much the same concept, but I used the UV's Green channel and two Power nodes to make the gradient move up and down on Cosine Time. I added the Posterize Step node just to make it look more blocky / stylistic."}
</Paragraph>
</Box>
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp c1ne6alq c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/grass_shadergraph3_wWE6J51r1DEgRuPS33cP0.png"}
optimize={false}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp c1ehemih c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/grass_shadergraph4_aMzb7hEeHchhmIebTsXyt.png"}
optimize={false}
width={1885}
height={917}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Shader Graph Walkthrough"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Grass wind Animation"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I looked up a tutorial on how it was done and just emulated it."}
</Paragraph>
<Link
href={"https://www.youtube.com/watch?v=L_Bzcw9tqTc"}
className={`w-link`}>
{"GRASS SWAY in Unity - SHADER GRAPH"}
</Link>
</Box>
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cdsjpcc c3qzgd0 cl8xzcs c1y6imu0 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c1vlqdzi colzpbp c6n7ott c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
<Heading
tag={"h2"}
className={`w-heading cuoke4w c11dowh9 cuccfz7 c8ys3vy c1xyv0ep c1e7helk cln2huj cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1c2j90z c1wt8a7g ch51qie cry9bxc cgn90jy c8od1c4 cg5j03k c1gut7ra cvyaqlm c32myit c1tme1mb czr2pxy c1dhz37v cvw48zk`}>
<Bold
className={`w-bold-text`}>
{"Shadergraph Overview"}
</Bold>
</Heading>
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/grass_shadergraph5_-XP3rxqpo6M68NxARAiXU.png"}
optimize={false}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z\"/>\n        <path fill=\"currentColor\" d=\"m8.076 7.26l.095.083l8.486 8.485a1 1 0 0 1-.246 1.595l-.116.05L5.91 21.3c-1.952.72-3.853-1.115-3.26-3.064l.05-.146L6.526 7.704a1 1 0 0 1 1.447-.515l.103.07Zm-.214 2.602l-3.285 8.92a.5.5 0 0 0 .562.664l.08-.023l8.918-3.286l-6.275-6.275Zm9.245 1.742c.911.048 2.16.24 3.246.892a1 1 0 0 1-.925 1.77l-.104-.055c-.682-.41-1.554-.57-2.322-.61a7.666 7.666 0 0 0-.95.004l-.316.031a1 1 0 0 1-.281-1.98a8.587 8.587 0 0 1 1.652-.053Zm2.025-2.786a1 1 0 0 1 .116 1.993l-.116.007h-.708a1 1 0 0 1-.116-1.993l.116-.007h.708ZM15.95 8.05a1 1 0 0 1 .083 1.32l-.083.094l-1.06 1.061a1 1 0 0 1-1.498-1.32l.083-.094l1.06-1.06a1 1 0 0 1 1.415 0Zm-2.587-5.266c.448 1.346.208 2.82-.072 3.85a10.11 10.11 0 0 1-.69 1.863a1 1 0 0 1-1.79-.893a8.13 8.13 0 0 0 .55-1.496c.227-.832.341-1.735.166-2.475l-.061-.216a1 1 0 1 1 1.897-.633Zm5.415 2.438a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z\"/>\n    </g>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Final Result"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Final Thoughts"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"It ended up looking more like seaweed instead of normal grass, but I think I still managed to achieve what I set out to do :D"}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp cxhov35 crv6lia crv1a4t cbrrmm8 cuo9dm5 c5egcmi cr1aip5 c15hexcm cxz9xjl`}>
<Box
className={`w-box c1mcu1jn c1jzkadg`} />
</Box>
</Box>
<Heading
className={`w-heading c1qyy4dh c1vlqdzi c1qom380 c1llqm3g cl7jefz c2wmpdl ckjkq46 c1ddt9bk c1tp72xw ce1ytke c1uv6uxn cacfwr0 c14969jl c1por3pp c1er9g7j cj9wdjl co9ka97 c10n7ej8 c16dndnb`}>
{"Lightning VFX"}
</Heading>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cori9ti c17xbrdu c1mcu1jn cx6c9kw c174sw29`}>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c1vlqdzi colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z\"/>\n        <path fill=\"currentColor\" d=\"M5 16c.748 0 1.463.226 2.014.64c.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86c-.55.414-1.266.64-2.014.64c-.748 0-1.463-.226-2.014-.64C2.434 19.948 2 19.3 2 18.5s.434-1.447.986-1.86C3.536 16.225 4.252 16 5 16Zm0 2c-.357 0-.641.11-.814.24c-.123.092-.165.17-.18.218L4 18.5l.007.042c.014.048.056.126.179.219c.173.13.457.239.814.239c.357 0 .641-.11.814-.24c.123-.092.165-.17.18-.218L6 18.5l-.007-.042c-.014-.048-.056-.126-.179-.219C5.641 18.11 5.357 18 5 18Zm7.923-15.115c1.487 0 2.803.727 3.613 1.844a4.462 4.462 0 0 1 4.309 7.344a4.462 4.462 0 0 1-6.296 3.956a4.462 4.462 0 0 1-6.87-1.707A4.462 4.462 0 0 1 8.725 5.83a4.462 4.462 0 0 1 4.197-2.945Zm0 2a2.462 2.462 0 0 0-2.427 2.05a1 1 0 0 1-.888.83l-.146.004a2.462 2.462 0 0 0-.716 4.818a1 1 0 0 1 .667.667a2.463 2.463 0 0 0 4.224.889a1 1 0 0 1 1.333-.166a2.462 2.462 0 0 0 3.867-2.225a1 1 0 0 1 .333-.832a2.462 2.462 0 0 0-2.665-4.078a1 1 0 0 1-1.333-.5a2.462 2.462 0 0 0-2.249-1.457Z\"/>\n    </g>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g cnbspdo cyqk3ni cl7jefz`}>
{"Premise"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Setup"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"This effect was a group task working with 2 other people to create one VFX. Each of us take one aspect of the effect, anticipation, action and resolution. I specifically worked on the resolution of the effect, basically the end of it."}
</Paragraph>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Tackling Process"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I started piece by piece by breaking the effect into parts and combining them together at the end."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Process"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Particles"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I started with the spark particles effect that emit from the ground and bounce off the ground plane before disappearing."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp co1mph4 c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp ca1lob3 c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cdsjpcc c3qzgd0 cl8xzcs c1y6imu0 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp c1tdnlne c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
<Heading
tag={"h2"}
className={`w-heading cuoke4w c11dowh9 cuccfz7 c8ys3vy c1xyv0ep c1e7helk cln2huj cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1c2j90z c1wt8a7g csm64kz cry9bxc cgn90jy c8od1c4 cg5j03k c1gut7ra cvyaqlm c32myit c1tme1mb czr2pxy c1dhz37v cvw48zk`}>
<Bold
className={`w-bold-text`}>
{"Scorched Ground Shadergraph"}
</Bold>
</Heading>
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/Screenshot_2025-04-18_151127_zZaUaK-0ZtuwnY5r2Goo2.png"}
optimize={false}
width={1241}
height={823}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Process"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Scorched ground"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"I wanted the lightning to have an impact on the ground and create a scorched mark to emphasize the impact it has."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Process"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Black smoke"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"Added an extra black smoke effect to emphasize the burned ground. Its not super visible, but I think it adds just a little bit more to the overall effect."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp c1p710uh c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cdsjpcc c3qzgd0 cl8xzcs c1y6imu0 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp c1dfjvc3 c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
<Heading
tag={"h2"}
className={`w-heading cuoke4w c11dowh9 cuccfz7 c8ys3vy c1xyv0ep c1e7helk cln2huj cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1c2j90z c1wt8a7g csm64kz cry9bxc cgn90jy c8od1c4 cg5j03k c1gut7ra cvyaqlm c32myit c1tme1mb czr2pxy c1dhz37v cvw48zk`}>
<Bold
className={`w-bold-text`}>
{"Smoke Shadergraph"}
</Bold>
</Heading>
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/Screenshot_2025-04-18_151151_PqOZ5WSXCvE0Xg86Q6xqA.png"}
optimize={false}
width={1243}
height={801}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp cwng7n6 c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Dialog>
<DialogTrigger>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cdsjpcc c3qzgd0 cl8xzcs c1y6imu0 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp cpnfhcw c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c1vax25q`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
<Heading
tag={"h2"}
className={`w-heading cuoke4w c11dowh9 cuccfz7 c8ys3vy c1xyv0ep c1e7helk cln2huj cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1c2j90z c1wt8a7g csm64kz cry9bxc cgn90jy c8od1c4 cg5j03k c1gut7ra cvyaqlm c32myit c1tme1mb czr2pxy c1dhz37v cvw48zk`}>
<Bold
className={`w-bold-text`}>
{"Dome Shadergraph "}
</Bold>
{""}
<br />
{""}
</Heading>
</Box>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjqo3r0 c1k8g20r c1jr65p0 c1025dch c1j77jp8 c3o13 c17oz2g1 c6irwuw cry9bxc c47o47j cw5izhw`}>
<DialogContent
className={`w-dialog-content czr2pxy c3o13 cry9bxc c1lfjoq7 cd159xo c9xslfs c1e7helk cavd3zn cf13wwn ckrvf1i cbsgcz0`}>
<DialogClose
className={`w-close-button cdwd3jx cl8x7h3 c1ilrvbw cclx2ca cp3c4z crf7ik5 cm3kbk2 c14ekf61 cry9bxc c1qyy4dh ct02u4h co039og cvdbgy cw409oe cj9wdjl co9ka97 c1er9g7j c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1e7helk cr66o8x c7w6ovy cq24z5o cxicfmk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
<Image
src={"/assets/Screenshot_2025-04-18_151207_QpuMSHz1RNeBnryPFtKAD.png"}
optimize={false}
className={`w-image`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n    <path fill=\"currentColor\" d=\"M252 56a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12h-44v36a12 12 0 0 1-12 12H84v36a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h44v-36a12 12 0 0 1 12-12h44v-36a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12Z\"/>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Process"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Dome"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"Added a little dome impact effect to emphasize the impact of the lightning. It flashes really quickly and disappears."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cauqto8 c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam c10gcf41 c19wkfj2 colzpbp cr1aip5 c15hexcm`}>
<Box
className={`w-box cn6056e c1117wcl c1lxiyww c18v2pa2 c16xs6ny cry9bxc c1mcu1jn c5m8ase clv8gve`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z\"/>\n        <path fill=\"currentColor\" d=\"m8.076 7.26l.095.083l8.486 8.485a1 1 0 0 1-.246 1.595l-.116.05L5.91 21.3c-1.952.72-3.853-1.115-3.26-3.064l.05-.146L6.526 7.704a1 1 0 0 1 1.447-.515l.103.07Zm-.214 2.602l-3.285 8.92a.5.5 0 0 0 .562.664l.08-.023l8.918-3.286l-6.275-6.275Zm9.245 1.742c.911.048 2.16.24 3.246.892a1 1 0 0 1-.925 1.77l-.104-.055c-.682-.41-1.554-.57-2.322-.61a7.666 7.666 0 0 0-.95.004l-.316.031a1 1 0 0 1-.281-1.98a8.587 8.587 0 0 1 1.652-.053Zm2.025-2.786a1 1 0 0 1 .116 1.993l-.116.007h-.708a1 1 0 0 1-.116-1.993l.116-.007h.708ZM15.95 8.05a1 1 0 0 1 .083 1.32l-.083.094l-1.06 1.061a1 1 0 0 1-1.498-1.32l.083-.094l1.06-1.06a1 1 0 0 1 1.415 0Zm-2.587-5.266c.448 1.346.208 2.82-.072 3.85a10.11 10.11 0 0 1-.69 1.863a1 1 0 0 1-1.79-.893a8.13 8.13 0 0 0 .55-1.496c.227-.832.341-1.735.166-2.475l-.061-.216a1 1 0 1 1 1.897-.633Zm5.415 2.438a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z\"/>\n    </g>\n</svg>"}
className={`w-html-embed csru8nn c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1kzehto c1llqm3g`} />
<Box
className={`w-box c1lxiyww c1mcu1jn c18v2pa2`}>
<Text
className={`w-text c12sm2j2 c1llqm3g c1nkzcyu cyqk3ni cl7jefz`}>
{"Final Result"}
</Text>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g cn6056e c1117wcl`}>
<Text
className={`w-text c16tlm18 c1llqm3g c1eyv08h`}>
{"Final Thoughts"}
</Text>
<Paragraph
className={`w-paragraph c1llqm3g coyqk5m`}>
{"Most effects aren't very visible in the final compilation but I do think it still adds to the impact of the effect."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp c1apecau c9grybw crv1a4t cbrrmm8 cuo9dm5 c5egcmi cr1aip5 c15hexcm cxz9xjl`}>
<Box
className={`w-box c1mcu1jn c1jzkadg`} />
</Box>
</Box>
<Heading
className={`w-heading c1qyy4dh c1vlqdzi c1qom380 c1llqm3g cl7jefz c2wmpdl ckjkq46 c1ddt9bk c1tp72xw ce1ytke c1uv6uxn cacfwr0 c14969jl c1por3pp c1er9g7j cj9wdjl co9ka97 c10n7ej8 c16dndnb`}>
{"Various VFX"}
</Heading>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cori9ti c17xbrdu c1mcu1jn cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 c19wkfj2 colzpbp ccxxki3 c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp ctsg3lu c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 cc1qqvk colzpbp civmwyl c9grybw c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi ce02iuh c15hexcm c17mmneu`}>
<Box
className={`w-box c1mcu1jn cbrbvbg c119en8j`} />
</Box>
</Box>
<Box
className={`w-box cry9bxc c18v2pa2 c1mcu1jn`}>
<Paragraph
className={`w-paragraph cx84glk c12ho6o0`}>
{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
</Paragraph>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box c130qyz3 cqlgvkl c82o5tr`}>
<Box
className={`w-box c13xb0l cup9vyi c1n5d942`}>
<Box
className={`w-box c1357293 c9jnjeu c1y6imu0 c3qzgd0 czr2pxy c1xzl1u9 cry9bxc ceu66s9 c12ae6v5 c13gq7xy c1lfjoq7 c1qyy4dh c1wt8a7g cquv50b`}>
<Link
href={"#top"}
className={`w-link cuccfz7 c135vpv5 cyqk3ni c10psnxv c12sm2j2 c1fhkm63 clv8gve cry9bxc c1qyy4dh c1irt2x`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M11.47 5.47a.753.753 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V7.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06z\"/>\n</svg>"}
className={`w-html-embed csru8nn co039og cr66o8x`} />
<Text
tag={"span"}
className={`w-text cauqto8 cr66o8x cyqk3ni c180fws7`}>
{"Back To Top"}
</Text>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M11.47 5.47a.753.753 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V7.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06z\"/>\n</svg>"}
className={`w-html-embed csru8nn co039og cr66o8x`} />
</Link>
<Text
className={`w-text cyqk3ni c12ho6o0`}>
{"Jan Teo - 2025"}
</Text>
<Link
href={"mailto:janteojx@gmail.com"}
className={`w-link cl60rel c1ib9cr2 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c12ho6o0 cyqk3ni cb06ied`}>
{"janteojx@gmail.com"}
</Link>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Body>
}


      export { Page }
    