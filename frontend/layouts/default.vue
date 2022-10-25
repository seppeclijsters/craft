<template>
    <div>
        <div class="fixed w-40 h-40 rounded-full blur-lg bg-primary animate-pulse pointer-events-none z-10 scale-[1.5] -top-20 -right-20"></div>
        <div class="fixed w-40 h-40 rounded-full blur-lg bg-primary animate-pulse pointer-events-none z-10 scale-[1.25] top-1/3 -left-28"></div>
        <Header></Header>
        <main class="site-content">
            <slot />
        </main>
        <Footer />
    </div>
</template>