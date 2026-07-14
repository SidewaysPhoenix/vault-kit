import "./PageLayout.css";
import PageHeader from "./PageHeader";

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

function PageLayout(props: PageLayoutProps) {
    return (
        <main className="pageLayout">
            <PageHeader title={props.title} />
            
            <section className="pageContentPanel">
                {props.children}
            </section>
        </main>
    );
}

export default PageLayout;