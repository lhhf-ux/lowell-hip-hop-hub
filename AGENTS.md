<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep artist biography data and lineup groupings in `src/artists.ts` so editorial updates remain centralized and route components only render them.
- Keep every site image as a real file in `public/images/` referenced by a plain root-relative path, so the built site serves standalone on any static host without a platform asset pipeline.
- Generate the site's static HTML at build time by rendering each page through the built server bundle (TanStack's own prerenderer can't follow the preview server's trailing-slash redirects), and keep the deployable output a plain static client directory.
