import { HashRouter as Router, Routes, Route } from "react-router";

import Layout from "@/layout";
import { loadLazy } from "@/lib/loadComponent";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/hooks/scroll-to-top";

const About = loadLazy(() => import("@/pages/about"));
const Projects = loadLazy(() => import("@/pages/projects"));
const Publications = loadLazy(() => import("@/pages/publications"));
const NotFound = loadLazy(() => import("@/pages/notfound"));

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="publications" element={<Publications />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
