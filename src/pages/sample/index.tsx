import SampleLayout from '@/components/Organisms/layouts/sample';
import CounterSection from '@/components/Organisms/sections/sample/CounterSection';

const SamplePage = () => {
  return (
    <SampleLayout>
      <SampleLayout.Header>
        <CounterSection />
      </SampleLayout.Header>
    </SampleLayout>
  );
};

export default SamplePage;
