import { ListHeader } from "./components/ListHeader";
import { ListFooter } from "./components/ListFooter";
import { Button } from "./components/Button";
import { TextButton } from "./components/TextButton";
import { NavigationBar } from "./components/NavigationBar";
import { Spacing } from "./components/Spacing";
import { FixedBottomCTA } from "./components/FixedBottomCTA";
import { Skeleton } from "./components/Skeleton";
import { Loader } from "./components/Loader";

function App() {
  return (
    <>
      <ListHeader
        title={<ListHeader.title>이곳은 타이틀입니다.</ListHeader.title>}
        description={
          <ListHeader.description>이곳은 설명입니다.</ListHeader.description>
        }
        right={
          <ListHeader.right>
            <button>
              오른쪽
              <ArrowRight />
            </button>
          </ListHeader.right>
        }
      >
        안녕?
      </ListHeader>
      <ListFooter />
      <Button />
      <TextButton />
      <NavigationBar />
      <Spacing />
      <FixedBottomCTA />
      <Skeleton />
      <Loader />
    </>
  );
}

export default App;
