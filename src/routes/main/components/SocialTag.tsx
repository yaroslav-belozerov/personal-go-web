interface SocialTagText {
  text: string;
}

export default function SocialTag(props: SocialTagText) {
  return (
    <p class="flex sm:text-3xl font-[Inter] justify-center rounded-md px-4 py-2 bg-[#2B251F] text-lg transition-all">
      {props.text}
    </p>
  );
}
