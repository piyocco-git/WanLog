"use client";

export function QuickRecordButton() {
  const handleClick = () => {
    console.log("記録画面を開く");
  };

  return (
    <button className="quick-record-button" onClick={handleClick}>
        ＋ 今すぐお世話を記録する
    </button>
  );
}
