export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
        Next.js + TypeScript + Tailwind template
      </h1>

      <p className="max-w-2xl text-sm text-slate-300">
        This is your base project. Use it for landing pages, apps, internal tools,
        or as a starting point for more advanced setups.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Tech stack
          </h2>
          <ul className="space-y-1 text-slate-200">
            <li>Next.js 14 App Router</li>
            <li>TypeScript strict mode</li>
            <li>Tailwind CSS 3</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Dev environment
          </h2>
          <ul className="space-y-1 text-slate-200">
            <li>Devcontainer ready</li>
            <li>Codespaces compatible</li>
            <li>VS Code optimized</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Next steps
          </h2>
          <ol className="list-decimal space-y-1 pl-4 text-slate-200">
            <li>Add components in src/components</li>
            <li>Create routes in src/app</li>
            <li>Wire APIs in src/app/api</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
