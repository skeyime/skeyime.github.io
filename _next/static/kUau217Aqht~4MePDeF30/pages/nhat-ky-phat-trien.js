(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nfOj:function(n,t,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nhat-ky-phat-trien",function(){var n=h("pLzf");return{page:n.default||n}}])},pLzf:function(n,t,h){"use strict";h.r(t);var e=h("0iUn"),c=h("sLSF"),l=h("MI3g"),a=h("a7VT"),u=h("Tit0"),i=h("q1tI"),g=h.n(i),m=h("PgRs"),r=h.n(m),p=function(n){function t(){return Object(e.default)(this,t),Object(l.default)(this,Object(a.default)(t).apply(this,arguments))}return Object(u.default)(t,n),Object(c.default)(t,[{key:"render",value:function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(r.a,null,g.a.createElement("script",{type:"application/ld+json"},'{\n  "@context": "https://schema.org",\n  "@type": "BreadcrumbList",\n  "itemListElement": [{\n    "@type": "ListItem",\n    "position": 1,\n    "name": "Bộ gõ S-Key",\n    "item": "https://s-key.sourceforge.io"\n  },{\n    "@type": "ListItem",\n    "position": 2,\n    "name": "Nhật ký phát triển",\n    "item": "https://s-key.sourceforge.io/nhat-ky-phat-trien"\n  }]\n}'),g.a.createElement("title",null,"Nhật ký phát triển bộ gõ tiếng Việt S-Key | Huỳnh Trọng Nghĩa")),g.a.createElement("div",{className:"container"},g.a.createElement("br",null),g.a.createElement("h2",null,"NHẬT KÝ PHÁT TRIỂN"),g.a.createElement("ul",null,g.a.createElement("strong",null,"2/3/2019"),g.a.createElement("li",null,"Bổ sung thêm 3 bảng hướng dẫn nhanh về Tubinhtran-MS, Chữ Việt Nhanh trên trang chính.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"21/2/2019"),g.a.createElement("li",null,"Cập nhật Chrome Extension (2019.0.3), khắc phục lỗi không thể xuống hàng, backspace ở một số trang web. Riêng các khung soạn thảo trên Facebook (status, comment) vẫn chưa tìm được cách giải quyết việc gõ không đạt được kết quả mong muốn.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"18/2/2019"),g.a.createElement("li",null,"Cập nhật Chrome Extension (2019.0.1), giờ đây đã hoạt động được trên nhiều khung nhập liệu khác nhau.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"17/2/2019"),g.a.createElement("li",null,"Cập nhật quy tắc bung phụ âm ghép bằng một phím.",g.a.createElement("br",null),"'ch': '2', ",g.a.createElement("br",null),"'nh': '3',",g.a.createElement("br",null),"'th': '4',",g.a.createElement("br",null),"'tr': '5',",g.a.createElement("br",null),"'Ch': '@',",g.a.createElement("br",null),"'Nh': '#',",g.a.createElement("br",null),"'Th': '$',",g.a.createElement("br",null),"'Tr': '%'",g.a.createElement("br",null))),g.a.createElement("ul",null,g.a.createElement("strong",null,"22/07/2018"),g.a.createElement("li",null,"Đăng tải bản thử nghiệm của ",g.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/b%E1%BB%99-g%C3%B5-s-key/gegiolkbncjbckhcfihiogkinmggnlfi"},"Bộ gõ S-Key")," lên Chrome Web Store (extension).")),g.a.createElement("ul",null,g.a.createElement("strong",null,"21/07/2018"),g.a.createElement("li",null,"Thêm bộ ba nút hỗ trợ: Sao chép, cắt, xóa vào khung soạn thảo S-Key.")),g.a.createElement("ul",null,g.a.createElement("strong",null),g.a.createElement("li",null,"Sửa lỗi cy => ky (cỷ => kỷ, ..)."),g.a.createElement("li",null,"Tận dụng lại một số dấu ngắt câu trong lúc xử lý tự thêm dấu sắc ở vần ngược để tách các từ riêng khi viết liền nhau bởi dấu ngắt câu."),g.a.createElement("li",null,'Ví dụ ở phiên bản trước muốn gõ lợi/hại thì không được bởi "lợi/hại" được S-Key hiểu là 1 từ nên bỏ dấu sai, ở phiên bản này S-Key chủ động tách từ dựa vào một số dấu ngắt câu (trong đó có /).'),g.a.createElement("li",null,"Sửa lỗi chính ji => gi (Cũ: ji => gii).")),g.a.createElement("ul",null,g.a.createElement("strong",null,"24/6/2018"),g.a.createElement("br",null),"Bổ sung các dấu ngắt câu để S-Key thử thực hiện quy tắc thêm dấu sắc ở vần ngược, gồm",g.a.createElement("li",null," Dấu 2 chấm :"),g.a.createElement("li",null,"Dấu nháy đơn '"),g.a.createElement("li",null,'Dấu nháy kép "'),g.a.createElement("li",null,"Dấu ngoặc vuông đóng ]"),g.a.createElement("li",null,"Dấu ngoặc tròn đóng )"),g.a.createElement("br",null),g.a.createElement("li",null,"Đối với ] và } vì đều từ phím ] (shift sẽ thành }) mà gõ ra, thì chúng nằm trong quy tắc nguyên âm bằng một phím (=> ơ) và cũng nằm trong danh sách các dấu ngắt câu để thực hiện quy tắc thêm dấu sắc ở vần ngược dẫn đến sự xung đột. Trong phiên bản này bổ sung mã để làm rõ hơn việc xác định một phím gõ có được bung ra quy tắc nguyên âm bằng một phím hay không."),g.a.createElement("li",null,"Điều chỉnh lại hành vi khi bung quy tắc phụ âm đầu chữ c => k chỉ khi đi với i, e ,ê. (c => c c,a => ca c,i => ki c,e => ke c,ê => kê)"),g.a.createElement("li",null,"Sửa lỗi gõ lặp các chữ không liên quan đến một trong các quy tắc của S-Key (x,o,o => xoo (Cũ: x,o,o => xo)).")),g.a.createElement("ul",null,g.a.createElement("strong",null,"26/5/2018"),g.a.createElement("li",null,"Sửa lỗi khi gõ lặp theo quy tắc gõ nguyên âm bằng một phím.",g.a.createElement("br",null),'Ví dụ theo thứ tự gõ ( = > Ă (Quy tắc gõ nguyên âm bằng một phím, "(" = Shift + 9) ',g.a.createElement("br",null),"Ă( => ( (Gõ lặp) ",g.a.createElement("br",null),"(n => Ăn (Gõ tiếp n sau ( thì ( lại tự bung thành Ă trở lại, mâu thuẫn với kết quả gõ lặp ở bước trên - Build 13.05.2018)    ",g.a.createElement("br",null),"Sửa lại ",g.a.createElement("br",null),"... ",g.a.createElement("br",null),"(n => (n (Build 26.05.2018)"),g.a.createElement("li",null,"Hiện trạng cách xử lý của S-Key thông qua một số ví dụ như sau: ",g.a.createElement("br",null),"Hỏa3 => Hoa3 (Gõ lặp) ",g.a.createElement("br",null),"Hà1 => Há2 (Đang phân vân giữa việc hủy toàn bộ dấu và trả ra Ha21 hoặc đổi từ dấu huyền sang dấu sắc như hiện tại, nhưng việc đổi dấu trực tiếp có thể sẽ hữu ích với những từ dài, vd: hướng2 => hường1 (khi người dùng gõ một từ nhưng nhầm dấu thì chỉ cần gõ phím dấu mới, việc giữ hành vi này mang ý nghĩa tiện ích cho người dùng). ",g.a.createElement("br",null),"_Vẫn mong muốn làm thật đơn giản, có thể sẽ không cần và không nên làm các pha xử lý phức tạp chỉ để giải quyết một số trường hợp gõ ít gặp. Hoặc thậm chí là không cần xử lý gì thêm, người dùng gõ sao ra vậy, nếu sai thì xóa và tự gõ lại.  ",g.a.createElement("br",null),"Tuy nhiên vấn đề này vẫn cần cân nhắc thêm, việc S-Key thực thi PP ghi gọn Chữ Việt bản chất đã là một tập những hành vi được biến đổi khi gõ mà người dùng phải học qua các quy tắc mới chấp nhận được. ",g.a.createElement("br",null),'(bung ra phụ âm đầu chữ, nguyên âm bằng một phím,... xuyên suốt trong toàn bộ phương pháp) cho nên khó có thể tránh được việc phải thực thi những hành vi "khác" mong muốn được!')),g.a.createElement("ul",null,g.a.createElement("strong",null,"13/5/2018"),g.a.createElement("li",null,"Tìm ra nguyên nhân và khắc phục việc khi gõ nhanh thì không thực hiện được quy tắc bung phụ âm đầu chữ bằng một phím, do việc lựa chọn cách bắt sự kiện gõ phím."),g.a.createElement("li",null,"Sửa lỗi chữ in hoa đầu câu khi thực hiện quy tắc nguyên âm ghép + chữ cái (Iw = Yêu, {s = Ươc)."),g.a.createElement("li",null,"Rút gọn 3 pha xử lý của S-Key xuống còn 1 pha.",g.a.createElement("br",null),"Vẫn đang điều chỉnh xử lí khi gặp nguyên âm được bung ra bằng một phím và các phím bỏ dấu. Có thể sẽ có một số lỗi trong phiên bản hiện tại.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"9/5/2018"),g.a.createElement("li",null,"Tắt xử lí bung phụ âm đầu chữ k = c"),g.a.createElement("li",null,"Sửa lỗi chính tả khi bung phụ âm đầu chữ gh = g")),g.a.createElement("ul",null,g.a.createElement("strong",null,"7/5/2018"),g.a.createElement("li",null,"Bổ sung pha xử lý dấu sắc ở vần ngược cho từ phía trước nếu có thể, khi người dùng gõ một kí tự thuộc dấu ngắt câu: \\`\\`khoảng trắng, dấu phẩy, dấu chấm phẩy, dấu chấm, dấu hỏi, và dấu chấm than\\`\\` thì bộ gõ sẽ cố gắng tìm từ trước đó và kiểm tra nó có thỏa mãn điều kiện xử lý dấu sắc ở vần ngược (bán nguyên âm chưa bỏ dấu + phụ âm cuối c,ch,p,t)."),g.a.createElement("li",null,"Sửa lỗi chính tả cho một số trường hợp với phụ âm đầu chữ k - c (kư - cư)."),g.a.createElement("li",null,"Hiện trạng với quy tắc bung ra phụ âm đầu chữ bằng một phím, có vẻ như xử lí bên dưới khá nặng, nếu gõ từ tốn từng phím (k ra c, f ra ph) thì vẫn bình thường nhưng khi gõ nhanh 2 phím liên tục thì lại không hiệu nghiệm, cần kiểm tra lại thêm."),g.a.createElement("li",null,"Cảm nhận về việc bung ra phụ âm k bằng c ",g.a.createElement("br",null),"Ta gõ c sẽ bung ra k.",g.a.createElement("br",null),"Ta phải gõ lặp c,c để ra được c.",g.a.createElement("br",null),"Ta có thể gõ lặp k,k để ra k.",g.a.createElement("br",null),"Như vậy k có 2 cách gõ để bung ra được.",g.a.createElement("br",null),"Có một hướng khác là ta không dùng gõ c để bung ra k.",g.a.createElement("br",null),"Ta gõ k sẽ bung ra kh.",g.a.createElement("br",null),"Và ta gõ lặp k,k để bung ra k.",g.a.createElement("br",null),"Và gõ c vẫn chỉ bung ra c.",g.a.createElement("br",null),"Lúc này k chỉ có 1 cách gõ để bung ra được.",g.a.createElement("br",null),"Với hướng này ta bớt học đi 1 quy tắc, và chỉ phải gõ lặp k,k thôi chứ ko phải nhớ thêm gõ c ra k nữa vì c lúc này mãi ra c.",g.a.createElement("br",null),"Tuy nhiên cảm nhận này chỉ thấy lúc gõ thôi, còn về mặt viết thì đặt riêng ra 2 quy tắc c thay k, và k thay kh để hình thành 2 quy tắc độc lập.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"1/5/2018 (22:45)"),g.a.createElement("li",null,"Sửa lỗi gõ chữ in hoa đầu câu khi gõ phím bung ra phụ âm ghép đầu chữ (ph=f, Ph=F). ",g.a.createElement("br",null),"Cần theo dõi và thu thập thêm một số trường hợp gõ in hoa (lúc sửa chính tả,...)"),g.a.createElement("li",null,"Thêm phần sửa chính tả khi dùng phụ âm đầu chữ ng=w cùng với quy tắc nguyên âm ghép + chữ cái (w,e,v --\x3e ng -> nghe -> ngoem). Cần bổ sung thêm với k=c,..."),g.a.createElement("li",null,"Sửa lỗi với q,y,l (quuyên) - tự động bỏ nguyên âm thừa đằng trước (u) nếu quy tắc nguyên âm ghép + chữ cái khi bung ra cũng có nguyên âm này."),g.a.createElement("li",null,"Thêm link:test[trang chạy thử nghiệm bộ gõ]"),g.a.createElement("li",null,"Sửa một số lỗi nhỏ."),g.a.createElement("li",null,"Còn bỏ ngõ: Dấu sắc ở vần ngược: đang cân nhắc vì làm ảnh hưởng đến cơ chế bỏ dấu cũng như cơ chế test, và hành vi tự bỏ dấu sắc khá mơ hồ, hoặc có thể thực hiện khi qua từ mới sẽ bỏ dấu cho vần ngược ở từ trước đó.",g.a.createElement("br",null),"i thay y, y thay uy: i thay y không mấy hữu dụng, y thay uy thì nên làm.",g.a.createElement("br",null),"Vẫn cần một bộ sửa lỗi chính tả vì có một số trường hợp đặc biệt khi kết hợp giữa gõ phụ âm đầu chữ bằng 1 phím và quy tắc nguyên âm ghép + chữ cái (như với ng/ngh=w, qu=q).",g.a.createElement("br",null))),g.a.createElement("ul",null,g.a.createElement("strong",null,"30/4/2018"),g.a.createElement("li",null,"Sửa lỗi bung phụ âm đầu chữ w -> ng/ngh: chỉ bung w -> ng/ngh khi từ có từ 2 kí tự trở lên và phải thỏa \\`ng + a,o,u,â,ă,ô,ư,ơ\\` hoặc \\`ngh + e,i,ê\\`.",g.a.createElement("br",null),"Riêng các phụ âm đầu chữ khác đã bung ngay từ lúc gõ theo đúng quy tắc."),g.a.createElement("li",null,"Sửa lỗi khi gõ lặp các phím dấu, cũng như lặp hoặc có nhiều kí số trong từ."),g.a.createElement("li",null,"Đơn giản hóa quá trình đổi chữ in hoa/chữ thường khi bấm phím Shift hoặc (và) CapsLock."),"Cơ chế test đã bị cũ, cần tinh chỉnh và sẽ công khai sau."),g.a.createElement("ul",null,g.a.createElement("strong",null,"29/4/2018"),g.a.createElement("li",null,"Phát hành phiên bản S-Key mới hoàn toàn 2018.1.0 (Build 29/4/2018) Lần này là sự thay đổi về vòng ngoài của giải thuật, phân tán một số thao tác tiền xử lí từ như: hủy dấu (nhờ thao tác hủy dấu, giờ đây không cần pha xử lý sửa chính tả như ở ghi chú tháng 12/2017 nữa), chống lặp,.. và giữ lại cách thức bỏ (thêm) dấu vào đúng vị trí nguyên âm của S-Key 2017.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"25/4/2018"),g.a.createElement("li",null,"Bắt đầu phát triển phiên bản 2 (2018) của S-Key và di dời phiên bản cũ (2017) về địa chỉ https://nghiaht.github.io/skey/v1")),g.a.createElement("ul",null,g.a.createElement("strong",null,"17/12/2018"),g.a.createElement("li",null,'Thực ra ở phiên bản tháng 11 đã phát hiện thứ tự bỏ dấu của S-key bị sai trong một số trường hợp, ví dụ như muốn ra "huỳnh" mà cứ ra "hùynh", cho nên hôm nay đã phục hồi khâu xử lý thứ tự bỏ dấu về theo quy tắc gõ dấu kiểu cũ (là đoạn mã xử lý của bản build S-key đầu tiên) thay cho việc thực thi cơ chế bỏ dấu lai giữa kiểu mới và kiểu cũ trong phiên bản trước. (thực ra về cách xử lý bỏ dấu kiểu cũ, cũng chưa xử lý đúng được cho tất cả trường hợp, và hướng giải quyết sâu hơn sẽ được nói ở bên dưới).',g.a.createElement("br",null),"Nói thêm về thứ tự bỏ dấu, nó cũng phức tạp hơn khi input của người dùng trên một từ có thể thay đổi sau vài phím gõ tiếp theo. Lấy ví dụ:",g.a.createElement("br",null),'Gõ lần lượt phím h,o,a,2 => "hòa" (ĐÚNG)',g.a.createElement("br",null),"Gõ tiếp (không khoảng trắng) n,g => hòang (SAI)",g.a.createElement("br",null),'Sự phức tạp đó là khi bộ gõ đã thực hiện bỏ dấu một lần cho từ hoàn chỉnh "hòa", nhưng sau đó từ này lại thay đổi bằng cách cộng thêm phụ âm cuối n,g thông qua input của người dùng. Phức tạp chứ không hẳn là phức tạp, tuy nhiên cũng nên chỉ ra để mọi người đọc nhật ký có thể hiểu thêm, và cũng coi nó là 1 điểm "phức tạp" mà người phát triển gặp phải.',g.a.createElement("br",null),"Như vậy với ví dụ trên, có một số hướng xử lý sâu hơn được nghĩ đến:",g.a.createElement("br",null),"hòa => hòa + ng => Hủy dấu hòa và trả phím dấu 2 ra => hoa + ng + 2 => hoàng.",g.a.createElement("br",null),"Một hướng khác đó là áp dụng một bộ sửa lỗi chính tả bằng từ điển ở cuối pha xử lý input của người dùng.",g.a.createElement("br",null),'Cũng với hòa => hòa + ng => hòang => Tìm trong từ điển chính tả tự thu thập với những luật như "òa" + "nguyên âm cuối" => Thay "òa" bằng "oà".',g.a.createElement("br",null))),g.a.createElement("ul",null,g.a.createElement("strong",null,"14/12/2018"),g.a.createElement("li",null,'Tiếp tục về phần xử lý gõ lặp một số phím, nhưng hôm nay là 2 phím phụ âm "z" (trong gõ "z" bung ra "d") và "d" (trong gõ "d" bung ra "đ"). Đối với "d", vốn có thể từ "z" ⇒ "d", hay "d" ⇒ "đ" nên sẽ thêm một chút phức tạp trong khâu xử lý. Tuy nhiên cũng có thể tận dụng lại cách xử lý gõ lặp các phím dấu, các phím số bung ra nguyên âm hôm trước cho bản build 2017.12.14 này.')),g.a.createElement("ul",null,g.a.createElement("strong",null,"10/11/2017"),g.a.createElement("li",null,'có thể thấy đây là một buổi tối làm việc khá tập trung, đã giải quyết được việc gõ lặp các phím dấu chính (sắc huyền hỏi ngã nặng theo kiểu gõ Tubinhtran MS: 1,2,3,4,5; VD: a11 = a1) ngay trong đêm. Và phần khó hơn phải trải qua 2 ngày (11 và 12) mới tìm cách tháo gỡ đó là khi gõ lặp các phím 6,7,8,9,[,] vốn là các phím "tham lam", gọi là tham lam vì các phím này có thể đóng vai trò như một phím tắt theo kiểu gõ Tubinhtran-MS để bung ra các nguyên âm/phụ âm như â,ê,ô,ă,ơ,ư, và ngoài ra chúng còn có hành vi tương tự khi gõ lặp giống với các phím dấu chính (1,2,3,4,5). Thực sự phức tạp hơn tưởng tượng, trong quá trình làm còn tính đến giải quyết khi gõ in hoa và lặp các phím trên, v.v.',g.a.createElement("br",null),"Tuy nhiên cũng vui vẻ là bản build 2017.11.12.1 đã cơ bản giải quyết được, các trường hợp test mặc dù bị bôi đỏ FAIL nhưng thực chất khi gõ trong khung soạn thảo S-key ở trên vẫn ra đúng, báo đỏ FAIL chỉ vì cơ chế test hiện tại chưa mô phỏng được các tình huống gõ lặp phím một cách chính xác ⇒ Cần thay đổi cơ chế test thêm một lần nữa. Một số trường hợp đã giải quyết như: a11, hoa36, h^16, … Kết thúc một ngày Chủ Nhật đầy suy nghĩ và thử nghiệm khá nhiều với một phiên bản của S-key đã trưởng thành hơn, phức tạp hơn. Việc vẫn còn đó là với trường hợp gõ lặp các phím phụ âm được gõ bởi 1 phím (z → d, d → đ). Xin hẹn giải quyết nốt chúng vào tuần sau.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"29/10/2017"),g.a.createElement("li",null,"tạm thời đóng băng S-key phiên bản cũ, vốn phụ thuộc nhiều vào quy tắc bỏ dấu kiểu cũ, nhận thấy sự thiếu nhất quán trong một số trường hợp nguyên âm ghép có hay không có phụ âm cuối (hòa, hoà, hoàng,…​) ⇒ Tạm chuyển hướng sang bỏ dấu kiểu mới ⇒ Lấy thêm dữ liệu test từ bài viết http://chuvietnhanh.sourceforge.net/PhuongPhapMoiGoTatChuViet.htm sợ bộ thì cách bỏ dấu kiểu mới lại liền mạch, dễ làm, trong đa số các trường hợp, tuy nhiên vẫn cần theo dõi thêm.",g.a.createElement("br",null),'Sự bất cập, đấu tranh giữa quy tắc bỏ dấu kiểu cũ và kiểu mới đã có từ lâu, với cách nhìn của một người đang tự thực thi lại chúng, nhận thấy có thể nên "ép" người dùng bộ gõ của mình sang một cách tổng hợp, sao cho phải là cách hợp lý về mặt phát âm, thẩm mỹ, được đa số chấp thuận, vừa cũng là cách nhằm tiết kiệm sức lực khi phát triển bộ gõ, không phải băn khoăn trong việc níu kéo, cầu toàn, chuyển đổi giữa cả 2 quy tắc.')),g.a.createElement("ul",null,g.a.createElement("strong",null,"T8/2017"),g.a.createElement("li",null,"Nếu đã thiết lập bộ test với kiểu gõ Tubinhtran-MS thành công, bỏ dấu đúng với tất cả trường hợp gõ phím. Tiến hành tích hợp Phương pháp Tốc ký Chữ Việt Nhanh, xây dựng thêm bộ test với các trường hợp trong pp này.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"Mục tiêu tuần 12/6/2017"),g.a.createElement("li",null,'Đánh giá lại toàn bộ mã, thiết lập bộ test hầu hết các trường hợp gõ phím và điều chỉnh mã để có thể test một cách "máy móc" hơn. Cố gắng có thể mô phỏng lại thứ tự thao tác gõ phím và đảm bảo engine của bộ gõ có thể đáp ứng được. Vd:',g.a.createElement("br",null),"Input: [c,h,Shift_A,o,2] -> Output: chÀo",g.a.createElement("br",null),"Input: [c,h,Capslock,a,Capslock,o,2] -> Output: chÀo",g.a.createElement("br",null))),g.a.createElement("ul",null,g.a.createElement("strong",null,"10/6/2017"),g.a.createElement("li",null,"Cập nhật mã xử lý trạng thái phím Shift, Capslock, và đã có thể bỏ dấu chữ in hoa, chữ thường lẫn lộn (kể cả các chữ gõ bằng một phím).",g.a.createElement("br",null),'Có một số lấn cấn ở cách bỏ dấu kiểu cũ, kiểu mới, do phát hiện các trường hợp ngoại lệ ở các cặp "oa", "oe", "uy". ',g.a.createElement("br",null),"Tạm thời quy ước trong mã và tinh chỉnh để bỏ dấu đúng (vd: huỳnh # hùynh).",g.a.createElement("br",null),'Tạm sửa vị trí bỏ dấu ở cặp "ia", "ua" (già # gìa, quà # qùa).',g.a.createElement("br",null),"Có thể phải xác nhận lại cách bỏ dấu: cũ hay mới, hoặc sinh ra bộ sửa lỗi chính tả?")),g.a.createElement("ul",null,g.a.createElement("strong",null,"Mục tiêu tuần 29/5/2017"),g.a.createElement("li",null,"Thay đổi cách thức nhận phím gõ của người dùng, nhận diện được tình trạng các phím CapsLock, Shift (liên quan đến các chữ gõ bằng một phím) để có thể gõ được chữ in hoa, chữ thường đan xen (DANG DỞ).")),g.a.createElement("ul",null,g.a.createElement("strong",null,"Tuần 22/5/2017"),g.a.createElement("li",null,"Thay đổi cách tiếp cận, vận dụng một số khái niệm cơ bản của lexer, tokenizer và hình thành bản phôi thai đầu tiên, có thể gõ dấu hoàn chỉnh theo kiểu gõ Tubinhtran-MS, chưa gõ dấu chữ in hoa được.")),g.a.createElement("ul",null,g.a.createElement("strong",null,"Tuần 8/5/2017"),g.a.createElement("li",null,"Khởi động dự án, tìm kiếm ý tưởng, cách thức thực thi từ những dự án tương tự trước đó."))))}}]),t}(g.a.Component);t.default=p}},[["nfOj",1,0]]]);