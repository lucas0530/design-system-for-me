import SampleLayout from '@/components/Organisms/layouts/sample';
import CounterSection from '@/components/Organisms/sections/sample/CounterSection';

const SamplePage = () => {
  return (
    <SampleLayout>
      <SampleLayout.Header></SampleLayout.Header>
      <SampleLayout.Body>
        <CounterSection />
      </SampleLayout.Body>
      <SampleLayout.Footer></SampleLayout.Footer>
    </SampleLayout>
  );
};

export default SamplePage;
