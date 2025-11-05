import React from "react";
// ...existing code...
// The file was a single minified HTML string. Here is the formatted JSX version:

const Hero = () => (
	<div data-theme="quartz" className="scheme-light bg-background">
		<header
			role="banner"
			data-state="inactive"
			className="[--color-popover:color-mix(in_oklch,var(--color-muted)_25%,var(--color-background))]"
		>
			{/* ...header content... */}
		</header>
		<main role="main" className="bg-muted overflow-hidden">
			<section className="relative py-32 md:py-44 lg:py-52">
				<div className="relative z-30 mx-auto max-w-5xl px-6 text-center">
					<h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold sm:text-5xl">
						Write. Refine. Publish.
					</h1>
					<p className="text-muted-foreground mx-auto mb-7 mt-3 max-w-xl text-balance text-xl">
						Write poetry and stories with the world's first AI poetry muse.
					</p>
					<div className="mx-auto w-full max-w-xl">
						<form className="bg-card ring-border-illustration w-full divide-y overflow-hidden rounded-xl shadow-md ring-1 relative">
							<textarea
								data-slot="textarea"
								className="ring-foreground/10 placeholder:text-muted-foreground flex min-h-16 border border-transparent text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-foreground/35 focus-visible:ring-ring/25 dark:focus-visible:border-foreground/25 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full resize-none rounded-none border-none p-3 shadow-none outline-none ring-0 field-sizing-content max-h-[6lh] bg-transparent dark:bg-transparent focus-visible:ring-0"
								name="message"
								placeholder="What should we write today?"
							/>
							<div className="flex items-center justify-between p-1">
								<div className="flex items-center [&_button:first-child]:rounded-bl-xl gap-0">
									<button
										className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground shrink-0 gap-1.5 rounded-lg text-muted-foreground size-8"
										type="button"
									>
										{/* plus icon */}
									</button>
									<button
										className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 shrink-0 gap-1.5 rounded-lg text-muted-foreground h-8 px-2.5"
										type="button"
									>
										{/* figma icon */}
										<span>Design</span>
									</button>
								</div>
								<button
									className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-md border-[0.5px] border-white/25 [&_svg]:drop-shadow-sm not-in-data-[theme=dark]:text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,var(--color-foreground)15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 gap-1.5 rounded-lg absolute bottom-1 right-1 size-8 shadow-black/25"
									type="submit"
									disabled
								>
									{/* arrow-up icon */}
								</button>
							</div>
						</form>
						<div className="mt-6 flex flex-wrap justify-center gap-3">
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Write a short story</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Compose a haiku</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Create a character</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Imagine a future</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Explore an emotion</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Write a dialogue</button>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-black/15 border border-transparent ring-1 ring-foreground/10 duration-200 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 text-xs active:scale-98 hover:bg-card/50 cursor-pointer rounded-full bg-transparent px-3 shadow-none transition-all" type="button">Describe a place</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
);

export default Hero;